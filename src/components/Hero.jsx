import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "react-bootstrap";
import { personalInfo } from "../data/mockData";

function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrolltoAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    section: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: "4rem",
      fontFamily: "system-ui",
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
      width: "100%",
      maxWidth: "1200px",
      padding: "clamp(20px,5vw,60px)",
      margin: "0 auto",
      textAlign: "center",
    },

    badge: {
      display: "inline-block",
      padding: "8px 18px",
      borderRadius: "999px",
      border: "1px solid #bfdbfe",
      background: "#eff6ff",
      color: "#2563eb",
      fontWeight: 500,
      marginBottom: "1.2rem",
    },

    name: {
      fontSize: "clamp(2.3rem,6vw,4.5rem)",
      fontWeight: 800,
      marginBottom: "1rem",
      lineHeight: 1.2,
    },

    gradientName: {
      background: "linear-gradient(90deg,#2563eb,#06b6d4,#3b82f6)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      backgroundSize: "200% 200%",
      animation: "gradient 6s ease infinite",
    },

    title: {
      fontSize: "clamp(1.4rem,3vw,2.2rem)",
      fontWeight: 600,
      color: "#334155",
      marginBottom: "1rem",
    },

    tagline: {
      fontSize: "clamp(1rem,2vw,1.25rem)",
      color: "#64748b",
      maxWidth: "650px",
      margin: "0 auto 2.5rem",
      lineHeight: 1.6,
    },

    btnPrimary: {
      background: "linear-gradient(135deg,#2563eb,#06b6d4)",
      border: "none",
      padding: "18px 34px",
      fontSize: "18px",
      fontWeight: 600,
      borderRadius: "10px",
      transition: "0.25s",
      color: "white",
      cursor: "pointer",
      fontFamily: "system-ui",
    },

    btnOutline: {
      border: "2px solid #2563eb",
      color: "#2563eb",
      padding: "18px 34px",
      fontSize: "18px",
      fontWeight: 600,
      borderRadius: "10px",
      background: "transparent",
      transition: "0.25s",
      cursor: "pointer",
      fontFamily: "system-ui",
    },

    socials: {
      display: "flex",
      justifyContent: "center",
      gap: "18px",
      marginTop: "2rem",
    },

    iconBtn: {
      padding: "14px",
      borderRadius: "50%",
      background: "#f1f5f9",
      transition: "0.25s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    scrollWrap: {
      position: "absolute",
      bottom: "30px",
      left: "50%",
      transform: "translateX(-50%)",
    },

    scrollBox: {
      width: "26px",
      height: "42px",
      border: "2px solid #2563eb",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
    },

    scrollDot: {
      width: "6px",
      height: "10px",
      background: "#2563eb",
      borderRadius: "10px",
      marginTop: "8px",
      animation: "scroll 1.8s infinite",
    },
  };

  return (
    <section style={styles.section}>
      {/* Keyframes */}
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
        @keyframes scroll{
          0%{opacity:0;transform:translateY(0)}
          40%{opacity:1}
          80%{opacity:0;transform:translateY(14px)}
          100%{opacity:0}
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
        <div style={styles.badge}>Welcome to my portfolio</div>

        <h1 style={styles.name}>
          Hi, I'm <span style={styles.gradientName}>{personalInfo.name}</span>
        </h1>

        <h2 style={styles.title}>{personalInfo.title}</h2>

        <p style={styles.tagline}>{personalInfo.tagline}</p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button style={styles.btnPrimary} onClick={scrolltoAbout}>
            More About Me <ArrowRight style={{ marginLeft: 8 }} size={18} />
          </Button>

          <Button style={styles.btnOutline} onClick={scrollToContact}>
            Get In Touch
          </Button>
        </div>

        {/* Social Icons */}
        <div style={styles.socials}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            style={styles.iconBtn}
          >
            <Github size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            style={styles.iconBtn}
          >
            <Linkedin size={22} />
          </a>
          <a href={`mailto:${personalInfo.email}`} style={styles.iconBtn}>
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
