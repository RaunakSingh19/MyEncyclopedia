import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogPreview.css';

const BlogPreview = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 3)))
      .catch((err) => console.error('Error fetching preview blogs:', err));
  }, []);

  return (
    <section className="blog-preview-section">
      <div className="containerr">
        <h2 className="section-title">Our Blog Post</h2>
        <p className="section-subtitle">Latest Articles & Updates</p>

        <div className="blog-cards-container">
          {blogs.map((blog) => {
            const dateObj = new Date(blog.date);
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString('default', { month: 'short' });

            return (
              <div className="blog-card" key={blog._id}>
                <div className="blog-date-box">
                  <span className="day">{day}</span>
                  <span className="month">{month}</span>
                </div>
                <div className="blog-content">
                  <p className="blog-author">
                    <span className="blog-author-label">By:</span>{" "}
                    <span className="blog-author-name">{blog.author}</span>
                  </p>
                  <div className="blog-meta">
                    <span className="blog-likes">125 Likes</span>
                    <span className="blog-shares">42 Shares</span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-subtitle">{blog.subtitle}</p>
                  <button 
                    className="read-more-btn"
                    onClick={() => navigate(`/blog/${blog._id}`)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="preview-button-wrapper">
          <button className="see-more-button" onClick={() => navigate('/blog')}>
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;