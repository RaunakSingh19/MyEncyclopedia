import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "", color: "", type: "", image: "", taste: "",
    description: "", protein: "", benefits: "", drawbacks: ""
  });
  const [fruitList, setFruitList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingFruit, setEditingFruit] = useState(null);

  const API_BASE_URL = "https://myencyclopedia-76ou.onrender.com/api/fruits";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchFruits = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${API_BASE_URL}/all`);
      // Handle both old and new response formats
      const fruitsData = res.data.data || res.data;
      setFruitList(Array.isArray(fruitsData) ? fruitsData : []);
    } catch (err) {
      console.error("Error fetching fruits:", err);
      setError("Failed to fetch fruits. Make sure the backend server is running on port 5000.");
      setFruitList([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      
      if (editingFruit) {
        // Update existing fruit
        await axios.put(`${API_BASE_URL}/update/${editingFruit._id}`, formData);
        setEditingFruit(null);
      } else {
        // Add new fruit
        await axios.post(`${API_BASE_URL}/add`, formData);
      }
      
      // Reset form
      setFormData({
        name: "", color: "", type: "", image: "", taste: "",
        description: "", protein: "", benefits: "", drawbacks: ""
      });
      setShowForm(false);
      await fetchFruits();
    } catch (err) {
      console.error("Error saving fruit:", err);
      setError(`Failed to ${editingFruit ? 'update' : 'add'} fruit. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (fruit) => {
    setFormData({
      name: fruit.name || "",
      color: fruit.color || "",
      type: fruit.type || "",
      image: fruit.image || "",
      taste: fruit.taste || "",
      description: fruit.description || "",
      protein: fruit.protein || "",
      benefits: fruit.benefits || "",
      drawbacks: fruit.drawbacks || ""
    });
    setEditingFruit(fruit);
    setShowForm(true);
  };

  const handleDelete = async (fruitId) => {
    if (window.confirm("Are you sure you want to delete this fruit?")) {
      try {
        setLoading(true);
        await axios.delete(`${API_BASE_URL}/delete/${fruitId}`);
        await fetchFruits();
      } catch (err) {
        console.error("Error deleting fruit:", err);
        setError("Failed to delete fruit. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const cancelEdit = () => {
    setEditingFruit(null);
    setShowForm(false);
    setFormData({
      name: "", color: "", type: "", image: "", taste: "",
      description: "", protein: "", benefits: "", drawbacks: ""
    });
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  const formStyle = {
    marginTop: 20,
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9"
  };

  const inputStyle = {
    width: "100%",
    padding: 8,
    border: "1px solid #ccc",
    borderRadius: 4,
    marginBottom: 10
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    marginRight: 10
  };

  const cardStyle = {
    border: "1px solid #ddd",
    padding: 15,
    margin: "10px 0",
    borderRadius: 8,
    backgroundColor: "white"
  };

  return (
    <div style={{ padding: 20, maxWidth: 1200, margin: "0 auto" }}>
      <h2>Admin Panel - Fruit Management</h2>
      
      {error && (
        <div style={{ 
          color: "red", 
          backgroundColor: "#ffe6e6", 
          padding: 10, 
          marginBottom: 20,
          borderRadius: 5,
          border: "1px solid red"
        }}>
          {error}
        </div>
      )}

      <button 
        onClick={() => setShowForm(true)}
        disabled={loading}
        style={{...buttonStyle, opacity: loading ? 0.6 : 1}}
      >
        Add New Fruit
      </button>

      {showForm && (
        <div style={formStyle}>
          <h3>{editingFruit ? "Edit Fruit" : "Add New Fruit"}</h3>
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((field) => (
              <div key={field} style={{ marginBottom: 10 }}>
                <label style={{ display: "block", marginBottom: 5, fontWeight: "bold" }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                {field === "description" || field === "benefits" || field === "drawbacks" ? (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field === "name" || field === "color" || field === "type"}
                    style={{...inputStyle, minHeight: 60, resize: "vertical"}}
                    placeholder={`Enter ${field}...`}
                  />
                ) : (
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field === "name" || field === "color" || field === "type"}
                    style={inputStyle}
                    placeholder={`Enter ${field}...`}
                  />
                )}
              </div>
            ))}
            <div style={{ marginTop: 20 }}>
              <button 
                type="submit" 
                disabled={loading}
                style={{
                  ...buttonStyle, 
                  backgroundColor: editingFruit ? "#28a745" : "#007bff",
                  opacity: loading ? 0.6 : 1
                }}
              >
                {loading ? "Saving..." : (editingFruit ? "Update Fruit" : "Add Fruit")}
              </button>
              <button 
                type="button" 
                onClick={cancelEdit}
                style={{...buttonStyle, backgroundColor: "#6c757d"}}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <h3 style={{ marginTop: 30 }}>
        Fruits List ({fruitList.length} {fruitList.length === 1 ? 'item' : 'items'}):
      </h3>
      
      {loading && <p>Loading...</p>}
      
      {!loading && fruitList.length === 0 ? (
        <p style={{ color: "#666", fontStyle: "italic" }}>
          No fruits found. Add some fruits to get started!
        </p>
      ) : (
        <div>
          {fruitList.map((fruit) => (
            <div key={fruit._id} style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: "#333", marginBottom: 10 }}>{fruit.name}</h4>
                  <p><strong>Color:</strong> {fruit.color}</p>
                  <p><strong>Type:</strong> {fruit.type}</p>
                  {fruit.taste && <p><strong>Taste:</strong> {fruit.taste}</p>}
                  {fruit.description && (
                    <p style={{ color: "#666", marginTop: 10 }}>
                      <strong>Description:</strong> {fruit.description.substring(0, 100)}
                      {fruit.description.length > 100 ? "..." : ""}
                    </p>
                  )}
                  {fruit.protein && <p><strong>Protein:</strong> {fruit.protein}</p>}
                  {fruit.benefits && (
                    <p style={{ color: "#28a745" }}>
                      <strong>Benefits:</strong> {fruit.benefits.substring(0, 80)}
                      {fruit.benefits.length > 80 ? "..." : ""}
                    </p>
                  )}
                </div>
                <div style={{ marginLeft: 20 }}>
                  <button
                    onClick={() => handleEdit(fruit)}
                    disabled={loading}
                    style={{
                      ...buttonStyle,
                      backgroundColor: "#28a745",
                      fontSize: 12,
                      padding: "5px 10px",
                      marginBottom: 5,
                      display: "block",
                      width: 60
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(fruit._id)}
                    disabled={loading}
                    style={{
                      ...buttonStyle,
                      backgroundColor: "#dc3545",
                      fontSize: 12,
                      padding: "5px 10px",
                      width: 60
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;