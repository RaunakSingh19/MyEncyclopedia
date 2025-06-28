import React, { useEffect, useState } from 'react';
import './Blog.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="blog-section">
      <div className="containerr">
        <p className="blog-subtitle">OUR BLOG POST</p>
        <h2 className="blog-title">Latest Article of Nutrition</h2>
        <div className="blog-card-container">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <div className="date-box">
                <span className="day">{new Date(blog.date).getDate()}</span>
                <span className="month">
                  {new Date(blog.date).toLocaleString('default', { month: 'short' })}
                </span>
              </div>
              <div className="blog-content">
                <p className="author-line">
                  By: <strong>{blog.author}</strong>
                </p>
                <p className="meta-info">87 Likes &nbsp;•&nbsp; 58 Share</p>
                <h3 className="blog-heading">{blog.title}</h3>
                <p className="blog-desc">{blog.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-btn-container">
          {/* <button className="blog-more-btn">View All Articles</button> */}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;