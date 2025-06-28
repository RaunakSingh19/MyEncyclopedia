import React, { useEffect, useState } from 'react';
import './AdminBlogPage.css';

const AdminBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: '', author: '', content: '' });
  const [editId, setEditId] = useState(null);

  const fetchBlogs = async () => {
    const res = await fetch('http://localhost:5000/api/blogs');
    const data = await res.json();
    setBlogs(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editId
      ? `http://localhost:5000/api/blogs/${editId}`
      : 'http://localhost:5000/api/blogs';
    const method = editId ? 'PUT' : 'POST';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setFormData({ title: '', author: '', content: '' });
    setEditId(null);
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setFormData({ title: blog.title, author: blog.author, content: blog.content });
    setEditId(blog._id);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/blogs/${id}`, { method: 'DELETE' });
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="admin-blog">
      <h2>Admin Blog Panel</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Blog Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          required
        />
        <textarea
          placeholder="Content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          required
        />
        <button type="submit">{editId ? 'Update' : 'Create'} Blog</button>
      </form>

      <ul className="blog-list">
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p><strong>By:</strong> {blog.author}</p>
            <p>{blog.content}</p>
            <button onClick={() => handleEdit(blog)}>Edit</button>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminBlogPage;
