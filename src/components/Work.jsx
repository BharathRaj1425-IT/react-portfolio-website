import React, { useState } from "react";
import { Github, Filter } from "lucide-react";
import { projectsData } from "../data/mockData";
import { Button } from "react-bootstrap";

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const [filterTech, setFilterTech] = useState("All");

  const allTechs = [
    "All",
    ...new Set(projectsData.flatMap((p) => p.technologies)),
  ];

  const filteredProjects =
    filterTech === "All"
      ? projectsData
      : projectsData.filter((p) => p.technologies.includes(filterTech));

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const styles = {
    section: {
      padding: "120px 20px",
      fontFamily: "Inter, sans-serif",
      background: "#f8fafc",
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
      maxWidth: 1200,
      margin: "0 auto",
      position: "relative",
      zIndex: 1, // content above blobs
    },

    heading: {
      fontSize: "clamp(2rem,5vw,3rem)",
      fontWeight: 800,
      marginBottom: 10,
    },

    gradient: {
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
      fontSize: 18,
      maxWidth: 600,
      margin: "0 auto 40px",
      lineHeight: 1.6,
    },

    filterWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      marginBottom: 40,
    },

    select: {
      padding: "10px 16px",
      borderRadius: 10,
      border: "1px solid #cbd5e1",
      background: "white",
      fontWeight: 500,
      cursor: "pointer",
      outline: "none",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: 30,
      marginBottom: 50,
    },

    card: {
      background: "white",
      borderRadius: 22,
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,.12)",
      transition: "0.35s",
      cursor: "pointer",
      textAlign: "left",
    },

    imgWrap: {
      position: "relative",
      paddingBottom: "56%",
      overflow: "hidden",
      background: "#e2e8f0",
    },

    img: {
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "0.5s",
    },

    featured: {
      position: "absolute",
      top: 12,
      right: 12,
      background: "linear-gradient(135deg,#2563eb,#06b6d4)",
      color: "white",
      fontSize: 12,
      fontWeight: 600,
      padding: "6px 12px",
      borderRadius: 999,
    },

    content: {
      padding: 22,
    },

    title: {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 10,
      transition: "0.25s",
    },

    desc: {
      color: "#64748b",
      marginBottom: 16,
      lineHeight: 1.6,
    },

    techWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 18,
    },

    tech: {
      fontSize: 13,
      padding: "6px 12px",
      borderRadius: 999,
      border: "1px solid rgba(37,99,235,.3)",
      color: "#2563eb",
      fontWeight: 600,
    },

    btnRow: {
      display: "flex",
      gap: 10,
    },

    btn: {
      flex: 1,
      padding: "10px 14px",
      borderRadius: 10,
      border: "2px solid #2563eb",
      color: "#2563eb",
      background: "transparent",
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      transition: "0.25s",
      textDecoration: "none",
    },

    viewBtn: {
      padding: "16px 32px",
      borderRadius: 12,
      border: "2px solid #2563eb",
      color: "#2563eb",
      background: "transparent",
      fontWeight: 600,
      cursor: "pointer",
      transition: "0.25s",
    },
  };

  return (
    <section id="work" style={styles.section}>
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
          top: 80,
          left: 40,
        }}
      />
      <div
        style={{
          ...styles.blob,
          width: 380,
          height: 380,
          background: "#06b6d4",
          bottom: 80,
          right: 40,
        }}
      />

      <div style={styles.container}>
        {/* Header */}
        <h2 style={styles.heading}>
          Featured <span style={styles.gradient}>Projects</span>
        </h2>
        <div style={styles.divider}></div>
        <p style={styles.subtitle}>
          A showcase of my recent work and side projects
        </p>

        {/* Filter */}
        <div style={styles.filterWrap}>
          <Filter size={18} color="#64748b" />
          <select
            value={filterTech}
            onChange={(e) => setFilterTech(e.target.value)}
            style={styles.select}
          >
            {allTechs.map((tech) => (
              <option key={tech}>{tech}</option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 20px 45px rgba(0,0,0,.2)";
                e.currentTarget.querySelector("img").style.transform =
                  "scale(1.1)";
                e.currentTarget.querySelector("h3").style.color = "#2563eb";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
                e.currentTarget.querySelector("img").style.transform =
                  "scale(1)";
                e.currentTarget.querySelector("h3").style.color = "black";
              }}
            >
              <div style={styles.imgWrap}>
                <img src={project.image} alt="" style={styles.img} />
                {project.featured && (
                  <div style={styles.featured}>Featured</div>
                )}
              </div>

              <div style={styles.content}>
                <h3 style={styles.title}>{project.title}</h3>
                <p style={styles.desc}>{project.description}</p>

                <div style={styles.techWrap}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={styles.btnRow}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.btn}
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <Button style={styles.viewBtn} onClick={() => setShowAll(!showAll)}>
            {showAll
              ? "Show Less"
              : `View All Projects (${filteredProjects.length})`}
          </Button>
        )}
      </div>
    </section>
  );
};

export default Work;
