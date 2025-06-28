import React, { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
  const [fruitList, setFruitList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE_URL = "https://myencyclopedia-76ou.onrender.com/api/fruits/all";

  useEffect(() => {
    const fetchFruits = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(API_BASE_URL);
        const fruitsData = res.data.data || res.data;
        setFruitList(Array.isArray(fruitsData) ? fruitsData : []);
      } catch (err) {
        setError("Failed to fetch fruits. Make sure the backend server is running.");
        setFruitList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFruits();
  }, []);

  return (
    <div style={{ padding: 20, maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>Fruit Courses</h1>
      <p style={{ textAlign: "center", fontSize: 18, color: "#666", marginBottom: 40 }}>
        Explore our curated fruit knowledge, fresh from the admin panel!
      </p>

      {error && (
        <div style={{
          color: "red",
          backgroundColor: "#ffe6e6",
          padding: 10,
          marginBottom: 30,
          borderRadius: 5,
          border: "1px solid red",
          textAlign: "center",
        }}>
          {error}
        </div>
      )}

      {loading ? (
        <p style={{ textAlign: "center", color: "#888" }}>Loading...</p>
      ) : fruitList.length === 0 ? (
        <p style={{ textAlign: "center", color: "#aaa", fontStyle: "italic" }}>
          No fruit courses available. Please check back later!
        </p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 30,
        }}>
          {fruitList.map((fruit) => (
            <div key={fruit._id || fruit.name} style={{
              backgroundColor: "white",
              padding: 25,
              borderRadius: 8,
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              border: "1px solid #eee",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 275,
            }}>
              <div>
                <h3 style={{ color: "#2c3e50", marginBottom: 12 }}>
                  {fruit.name} {fruit.type ? (<span style={{
                    fontWeight: "normal",
                    fontSize: "0.9em",
                    color: "#888",
                  }}>({fruit.type})</span>) : null}
                </h3>
                {fruit.image && (
                  <div style={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: 10,
                  }}>
                    <img
                      src={fruit.image}
                      alt={fruit.name}
                      style={{ maxWidth: "100%", maxHeight: 120, borderRadius: 6, objectFit: "cover" }}
                      onError={e => { e.target.style.display = "none"; }}
                    />
                  </div>
                )}
                <p style={{ color: "#666", marginBottom: 12, lineHeight: 1.6 }}>
                  {fruit.description
                    ? (fruit.description.length > 120 ? fruit.description.slice(0, 120) + "..." : fruit.description)
                    : "No description available."}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 10 }}>
                  {fruit.color && (
                    <span style={{
                      backgroundColor: "#e9ecef",
                      padding: "4px 8px",
                      borderRadius: 4,
                      fontSize: 12,
                      color: "#495057"
                    }}>
                      {fruit.color}
                    </span>
                  )}
                  {fruit.taste && (
                    <span style={{
                      backgroundColor: "#fff3cd",
                      padding: "4px 8px",
                      borderRadius: 4,
                      fontSize: 12,
                      color: "#856404"
                    }}>
                      {fruit.taste}
                    </span>
                  )}
                  {fruit.protein && (
                    <span style={{
                      backgroundColor: "#d4edda",
                      padding: "4px 8px",
                      borderRadius: 4,
                      fontSize: 12,
                      color: "#155724"
                    }}>
                      Protein: {fruit.protein}
                    </span>
                  )}
                </div>
                {fruit.benefits && (
                  <div style={{
                    backgroundColor: "#e8f7ec",
                    color: "#218838",
                    borderRadius: 4,
                    padding: "6px 10px",
                    fontSize: 13,
                    marginBottom: 6,
                  }}>
                    <strong>Benefits: </strong>
                    {fruit.benefits.length > 70 ? fruit.benefits.slice(0, 70) + "..." : fruit.benefits}
                  </div>
                )}
                {fruit.drawbacks && (
                  <div style={{
                    backgroundColor: "#fbeaea",
                    color: "#721c24",
                    borderRadius: 4,
                    padding: "6px 10px",
                    fontSize: 13,
                  }}>
                    <strong>Drawbacks: </strong>
                    {fruit.drawbacks.length > 70 ? fruit.drawbacks.slice(0, 70) + "..." : fruit.drawbacks}
                  </div>
                )}
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;