import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experienceData } from "../data/mockData";

const Experience = () => {
  /* ---------------- RESPONSIVE DETECTION ---------------- */
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- STYLES ---------------- */
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

    timeline: {
      position: "relative",
    },

    line: {
      position: "absolute",
      left: isMobile ? "8px" : "50%",
      top: 0,
      transform: isMobile ? "none" : "translateX(-50%)",
      width: "4px",
      height: "100%",
      background: "linear-gradient(to bottom,#2563eb,#06b6d4)",
    },

    row: {
      display: "flex",
      alignItems: "center",
      marginBottom: "70px",
      position: "relative",
      flexDirection: isMobile ? "column" : "row",
    },

    cardWrap: {
      width: isMobile ? "100%" : "50%",
      padding: isMobile ? "0 0 0 35px" : "0 40px",
    },

    card: {
      padding: "28px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(18px)",
      border: "1px solid rgba(37,99,235,0.15)",
      boxShadow: "0 12px 40px rgba(37,99,235,0.12)",
      transition: "0.3s",
    },

    dot: {
      position: "absolute",
      left: isMobile ? "8px" : "50%",
      transform: "translateX(-50%)",
      top: isMobile ? "10px" : "auto",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      background: "#2563eb",
      border: "4px solid white",
      boxShadow: "0 0 0 4px rgba(37,99,235,0.15)",
    },

    jobTitle: {
      fontSize: "22px",
      fontWeight: 700,
      marginBottom: "8px",
      color: "#1e293b",
    },

    company: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#2563eb",
      fontWeight: 600,
      marginBottom: "12px",
      flexWrap: "wrap",
    },

    meta: {
      display: "flex",
      gap: "16px",
      fontSize: "14px",
      color: "#64748b",
      flexWrap: "wrap",
      marginBottom: "15px",
    },

    description: {
      color: "#475569",
      lineHeight: 1.6,
      marginBottom: "18px",
    },

    achievementRow: {
      display: "flex",
      gap: "10px",
      marginBottom: "8px",
      alignItems: "flex-start",
    },

    bullet: {
      width: "6px",
      height: "6px",
      background: "#2563eb",
      borderRadius: "50%",
      flexShrink: 0,
    },

    achievementText: {
      fontSize: "14px",
      color: "#334155",
      lineHeight: 1.5,
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
    <section id="experience" style={styles.section}>
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

      {/* Background blobs */}
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
            Work <span style={styles.gradient}>Experience</span>
          </h2>
          <div style={styles.divider}></div>
          <p style={styles.subtitle}>
            My Professional Journey and Achievements
          </p>
        </div>

        {/* Timeline */}
        <div style={styles.timeline}>
          <div style={styles.line}></div>

          {experienceData.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={exp.id}
                style={{
                  ...styles.row,
                  flexDirection: isMobile
                    ? "column"
                    : isLeft
                      ? "row"
                      : "row-reverse",
                }}
              >
                <div style={styles.cardWrap}>
                  <div
                    style={styles.card}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-8px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    <h3 style={styles.jobTitle}>{exp.title}</h3>

                    <div style={styles.company}>
                      <Briefcase size={16} />
                      {exp.company}
                    </div>

                    <div style={styles.meta}>
                      <div style={{ display: "flex", gap: 5 }}>
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div style={{ display: "flex", gap: 5 }}>
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    <p style={styles.description}>{exp.description}</p>

                    {exp.achievements.map((a, idx) => (
                      <div key={idx} style={styles.achievementRow}>
                        <div style={styles.bullet}></div>
                        <p style={styles.achievementText}>{a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={styles.dot}></div>

                {!isMobile && <div style={{ width: "50%" }}></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
