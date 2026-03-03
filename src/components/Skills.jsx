import React from "react";
import { skillsData } from "../data/mockData";

const Skills = () => {
  const styles = {
    section: {
      padding: "120px 20px",
      fontFamily: "Inter, sans-serif",
      position: "relative",
      overflow: "hidden",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },

    header: {
      textAlign: "center",
      marginBottom: "70px",
    },

    title: {
      fontSize: "clamp(2rem,5vw,3rem)",
      fontWeight: 800,
      marginBottom: "12px",
    },

    gradient: {
      background: "linear-gradient(90deg,#2563eb,#06b6d4,#3b82f6)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      backgroundSize: "200% 200%",
      animation: "gradient 6s ease infinite",
    },

    divider: {
      width: "80px",
      height: "4px",
      margin: "0 auto 18px",
      borderRadius: "10px",
      background: "linear-gradient(90deg,#2563eb,#06b6d4)",
    },

    subtitle: {
      fontSize: "18px",
      color: "#64748b",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: 1.6,
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "30px",
    },

    card: {
      padding: "30px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(37,99,235,0.15)",
      boxShadow: "0 12px 40px rgba(37,99,235,0.12)",
      transition: "0.3s",
    },

    categoryHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "25px",
    },

    bar: {
      width: "6px",
      height: "36px",
      borderRadius: "20px",
      marginRight: "12px",
      background: "linear-gradient(to bottom,#2563eb,#06b6d4)",
    },

    categoryTitle: {
      fontSize: "22px",
      fontWeight: 700,
      color: "#1e293b",
    },

    skillRow: {
      marginBottom: "18px",
    },

    skillTop: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "6px",
    },

    skillName: {
      fontSize: "15px",
      fontWeight: 600,
      color: "#334155",
    },

    percent: {
      fontSize: "14px",
      fontWeight: 700,
      color: "#2563eb",
    },

    progressWrap: {
      height: "10px",
      background: "#e2e8f0",
      borderRadius: "999px",
      overflow: "hidden",
    },

    progressBar: {
      height: "100%",
      borderRadius: "999px",
      background: "linear-gradient(90deg,#2563eb,#06b6d4)",
      transition: "width 1s ease",
    },

    blob: {
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(90px)",
      opacity: 0.35,
      animation: "float 10s ease-in-out infinite alternate",
      pointerEvents: "none",
    },
  };

  return (
    <section id="skills" style={styles.section}>
      <style>
        {`
        @keyframes gradient{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        @keyframes float{
          from{transform:translateY(0)}
          to{transform:translateY(-35px)}
        }
      `}
      </style>

      {/* floating background blobs */}
      <div
        style={{
          ...styles.blob,
          width: 300,
          height: 300,
          background: "#3b82f6",
          top: 60,
          left: 40,
        }}
      />
      <div
        style={{
          ...styles.blob,
          width: 350,
          height: 350,
          background: "#06b6d4",
          bottom: 60,
          right: 40,
        }}
      />

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>
            My <span style={styles.gradient}>Skills</span>
          </h2>
          <div style={styles.divider}></div>
          <p style={styles.subtitle}>
            Technologies and Tools I use to bring ideas to life
          </p>
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {skillsData.map((category, i) => (
            <div
              key={i}
              style={styles.card}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {/* Category Header */}
              <div style={styles.categoryHeader}>
                <div style={styles.bar}></div>
                <h3 style={styles.categoryTitle}>{category.category}</h3>
              </div>

              {/* Skills */}
              {category.skills.map((skill, j) => (
                <div key={j} style={styles.skillRow}>
                  <div style={styles.skillTop}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <span style={styles.percent}>{skill.level}%</span>
                  </div>

                  <div style={styles.progressWrap}>
                    <div
                      style={{
                        ...styles.progressBar,
                        width: `${skill.level}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
