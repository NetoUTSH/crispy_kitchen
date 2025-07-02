import React from "react";


const Card = () => {
  return (
    <div style={{
      maxWidth: "320px",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "'Helvetica Neue', sans-serif",
      background: "#fff",
      margin: "20px auto"
    }}>
      <div style={{ position: "relative" }}>
        <img
          src="/path/to/your/seafood.jpg" // reemplaza con tu imagen
          alt="Seafood Set"
          style={{ width: "100%", display: "block" }}
        />
        <div style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "#f6c60d",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "4px 8px",
          borderRadius: "8px"
        }}>
          Dinner
        </div>
      </div>

      <div style={{ padding: "16px" }}>
        <h2 style={{
          fontSize: "20px",
          fontWeight: "600",
          margin: "0 0 12px 0",
          color: "#111"
        }}>
          Seafood Set
        </h2>

        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "12px"
        }}>
          <span style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#f6c60d",
            marginRight: "8px"
          }}>
            $86
          </span>
          <span style={{
            textDecoration: "line-through",
            color: "#aaa",
            fontSize: "16px"
          }}>
            $124
          </span>
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          color: "#555",
          fontSize: "14px"
        }}>
          <span style={{ fontWeight: "600", marginRight: "4px" }}>3</span>/5

          <div style={{ display: "flex", margin: "0 8px" }}>
            {[1,2,3,4,5].map((i) => (
              <span key={i} style={{
                color: i <= 3 ? "#f6c60d" : "#ddd",
                fontSize: "18px",
                marginRight: "2px"
              }}>★</span>
            ))}
          </div>

          <span style={{ color: "#888" }}>44 Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
