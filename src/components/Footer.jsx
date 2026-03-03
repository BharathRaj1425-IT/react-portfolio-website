import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/mockData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
  ];

  const moreLinks = [
    { name: "Gallery", href: "#gallery" },
    // { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    footer: {
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      background: "rgba(255,255,255,0.6)",
      borderTop: "1px solid rgba(37,99,235,0.15)",
      boxShadow: "0 -4px 25px rgba(37,99,235,0.08)",
      padding: "80px 20px 30px",
      fontFamily: "Inter, sans-serif",
    },

    container: {
      maxWidth: 1200,
      margin: "0 auto",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 50,
      marginBottom: 50,
    },

    logo: {
      fontSize: 26,
      fontWeight: 800,
      marginBottom: 18,
      background: "linear-gradient(90deg,#2563eb,#06b6d4,#3b82f6)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      backgroundSize: "200% 200%",
      animation: "gradient 6s ease infinite",
    },

    desc: {
      color: "#64748b",
      lineHeight: 1.7,
      marginBottom: 20,
    },

    socials: {
      display: "flex",
      gap: 12,
    },

    iconBtn: {
      padding: 12,
      borderRadius: 12,
      background: "rgba(148,163,184,0.12)",
      cursor: "pointer",
      transition: "0.25s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#60a5fa",
    },

    colTitle: {
      fontWeight: 700,
      marginBottom: 18,
      color: "#60a5fa",
    },

    link: {
      display: "block",
      marginBottom: 10,
      textDecoration: "none",
      color: "#64748b",
      transition: "0.25s",
      fontWeight: 500,
    },

    bottom: {
      borderTop: "1px solid rgba(148,163,184,0.2)",
      paddingTop: 25,
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      color: "#64748b",
      fontSize: 14,
      textAlign: "center",
    },

    heart: {
      color: "#ef4444",
      display: "inline-flex",
      alignItems: "center",
      animation: "pulse 1.6s infinite",
    },
  };

  return (
    <footer style={styles.footer}>
      <style>
        {`
        @keyframes gradient{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        @keyframes pulse{
          0%{transform:scale(1)}
          50%{transform:scale(1.15)}
          100%{transform:scale(1)}
        }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={styles.logo}>{personalInfo.name}</div>

            <div style={styles.desc}>
              {personalInfo.title} passionate about creating innovative
              solutions and building exceptional digital experiences.
            </div>

            <div style={styles.socials}>
              {[
                {
                  icon: <Github size={18} />,
                  link: personalInfo.github,
                },
                {
                  icon: <Linkedin size={18} />,
                  link: personalInfo.linkedin,
                },
                {
                  icon: <Mail size={18} />,
                  link: `mailto:${personalInfo.email}`,
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.iconBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(59,130,246,0.15)";
                    e.currentTarget.style.transform = "scale(1.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(148,163,184,0.12)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={styles.colTitle}>Quick Links</div>
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                onMouseLeave={(e) => (e.target.style.color = "#64748b")}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* More */}
          <div>
            <div style={styles.colTitle}>More</div>
            {moreLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
                onMouseLeave={(e) => (e.target.style.color = "#64748b")}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={styles.bottom}>
          <div>
            Copyright © {currentYear}. All rights reserved | Built with{" "}
            <span style={styles.heart}>
              <Heart size={16} fill="#ef4444" />
            </span>{" "}
            using <strong>React</strong> by <strong>{personalInfo.name}</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
