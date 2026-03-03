import React from "react";
import { CheckCircle2 } from "lucide-react";
import { aboutData } from "../data/mockData";

function About() {
  const styles = {
    section: {
      padding: "120px 20px",
      position: "relative",
      fontFamily: "Inter, sans-serif",
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
      margin: "0 auto",
      borderRadius: "10px",
      background: "linear-gradient(90deg,#2563eb,#06b6d4)",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: "60px",
      alignItems: "center",
    },

    imageWrap: {
      position: "relative",
    },

    glow: {
      position: "absolute",
      inset: "-20px",
      borderRadius: "20px",
      background: "linear-gradient(135deg,#2563eb,#06b6d4)",
      opacity: 0.25,
      filter: "blur(40px)",
    },

    img: {
      width: "100%",
      borderRadius: "20px",
      position: "relative",
      zIndex: 2,
      border: "4px solid white",
      boxShadow: "0 20px 60px rgba(37,99,235,0.25)",
    },

    description: {
      fontSize: "18px",
      lineHeight: 1.7,
      color: "#475569",
      marginBottom: "35px",
    },

    highlight: {
      display: "flex",
      gap: "14px",
      marginBottom: "16px",
      alignItems: "center",
    },

    highlightText: {
      fontSize: "16px",
      color: "#334155",
      lineHeight: 1.6,
    },

    stats: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "20px",
      marginTop: "50px",
    },

    statCard: {
      textAlign: "center",
      padding: "25px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.65)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(37,99,235,0.15)",
      boxShadow: "0 10px 35px rgba(37,99,235,0.12)",
      transition: "0.3s",
    },

    statNum: {
      fontSize: "30px",
      fontWeight: 800,
      background: "linear-gradient(90deg,#2563eb,#06b6d4)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },

    statLabel: {
      marginTop: "6px",
      fontSize: "14px",
      color: "#64748b",
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
    <section id="about" style={styles.section}>
      <style>
        {`
        @keyframes gradient{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        @keyframes float{
          from{transform:translateY(0px)}
          to{transform:translateY(-35px)}
        }
        `}
      </style>

      {/* floating blobs */}
      <div
        style={{
          ...styles.blob,
          width: 300,
          height: 300,
          background: "#3b82f6",
          top: 50,
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
            About <span style={styles.gradient}>Me</span>
          </h2>
          <div style={styles.divider}></div>
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {/* Image */}
          <div style={styles.imageWrap}>
            <div style={styles.glow}></div>
            <img src={aboutData.image} alt="Profile" style={styles.img} />
          </div>

          {/* Content */}
          <div>
            <p style={styles.description}>{aboutData.description}</p>

            {aboutData.highlights.map((h, i) => (
              <div key={i} style={styles.highlight}>
                <CheckCircle2 size={22} color="#2563eb" />
                <p style={styles.highlightText}>{h}</p>
              </div>
            ))}

            {/* Stats */}
            <div style={styles.stats}>
              {[
                ["1.5+", "Years Exp."],
                ["2+", "Programming Languages"],
                ["4+", "Tools"],
              ].map((s, i) => (
                <div
                  key={i}
                  style={styles.statCard}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-6px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <div style={styles.statNum}>{s[0]}</div>
                  <div style={styles.statLabel}>{s[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
