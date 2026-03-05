import React, { useState } from "react";
import { galleryData } from "../data/mockData";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(galleryData.map((item) => item.category)),
  ];

  const filteredItems =
    filter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  const styles = {
    section: {
      padding: "120px 20px",
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },

    blob: {
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(80px)",
      opacity: 0.5,
      animation: "float 10s ease-in-out infinite alternate",
      pointerEvents: "none",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
      fontFamily: "system-ui",
    },

    heading: {
      fontSize: "clamp(2rem,5vw,3rem)",
      fontWeight: 800,
      marginBottom: "10px",
    },

    gradientText: {
      background: "linear-gradient(90deg,#2563eb,#06b6d4,#3b82f6)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      backgroundSize: "200% 200%",
      animation: "gradient 6s ease infinite",
    },

    divider: {
      width: 80,
      height: 4,
      margin: "16px auto",
      borderRadius: 10,
      background: "linear-gradient(90deg,#2563eb,#06b6d4)",
    },

    subtitle: {
      color: "#64748b",
      fontSize: "18px",
      maxWidth: 600,
      margin: "0 auto 40px",
      lineHeight: 1.6,
    },

    filterWrap: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 12,
      marginBottom: 50,
    },

    filterBtn: (active) => ({
      padding: "10px 22px",
      borderRadius: 999,
      fontWeight: 600,
      border: active ? "none" : "1px solid #cbd5f5",
      background: active
        ? "linear-gradient(135deg,#2563eb,#06b6d4)"
        : "#f1f5f9",
      color: active ? "white" : "#334155",
      cursor: "pointer",
      transition: "0.25s",
      transform: active ? "scale(1.05)" : "scale(1)",
      boxShadow: active ? "0 8px 20px rgba(37,99,235,.25)" : "none",
    }),

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: 24,
    },

    card: {
      borderRadius: 20,
      overflow: "hidden",
      position: "relative",
      boxShadow: "0 10px 30px rgba(0,0,0,.12)",
      transition: "0.35s",
      cursor: "pointer",
    },

    imgWrap: {
      width: "100%",
      aspectRatio: "4 / 3",
      position: "relative",
      overflow: "hidden",
    },

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "0.5s",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      padding: 18,
      background:
        "linear-gradient(to top,rgba(0,0,0,.85),rgba(0,0,0,.35),transparent)",
      opacity: 0,
      transition: "0.3s",
    },

    category: {
      fontSize: 14,
      color: "#60a5fa",
      marginBottom: 4,
      fontWeight: 600,
    },

    title: {
      color: "white",
      fontWeight: 700,
      fontSize: 18,
    },
  };

  return (
    <section id="gallery" style={styles.section}>
      <style>
        {`
        @keyframes gradient{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        @keyframes float{
          from{transform:translateY(0px)}
          to{transform:translateY(-30px)}
        }
        `}
      </style>

      {/* Background blobs */}
      <div
        style={{
          ...styles.blob,
          width: 300,
          height: 300,
          background: "#3b82f6",
          top: 60,
          left: 50,
        }}
      />
      <div
        style={{
          ...styles.blob,
          width: 380,
          height: 380,
          background: "#06b6d4",
          bottom: 60,
          right: 50,
        }}
      />

      <div style={styles.container}>
        {/* Header */}
        <h2 style={styles.heading}>
          Gallery & <span style={styles.gradientText}>Achievements</span>
        </h2>

        <div style={styles.divider}></div>

        <p style={styles.subtitle}>
          Certifications, Events, Achievements and milestones
        </p>

        {/* Filters */}
        <div style={styles.filterWrap}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={styles.filterBtn(filter === category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.04)";
                e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,.2)";
                e.currentTarget.querySelector(".overlay").style.opacity = 1;
                e.currentTarget.querySelector("img").style.transform =
                  "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
                e.currentTarget.querySelector(".overlay").style.opacity = 0;
                e.currentTarget.querySelector("img").style.transform =
                  "scale(1)";
              }}
            >
              <div style={styles.imgWrap}>
                <img src={item.image} alt={item.title} style={styles.img} />
              </div>

              <div className="overlay" style={styles.overlay}>
                <div>
                  <div style={styles.category}>{item.category}</div>
                  <div style={styles.title}>{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
