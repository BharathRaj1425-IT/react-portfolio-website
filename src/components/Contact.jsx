import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../data/mockData";

const Contact = () => {
  const styles = {
    section: {
      padding: "120px 20px",
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
    },

    container: {
      maxWidth: 1200,
      margin: "0 auto",
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
      margin: "0 auto 60px",
      lineHeight: 1.6,
    },

    grid: {
      display: "flex",
      justifyContent: "center",
      gap: 60,
      alignItems: "start",
      textAlign: "left",
    },

    infoTitle: {
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 16,
    },

    infoText: {
      color: "#64748b",
      marginBottom: 40,
      lineHeight: 1.7,
    },

    contactItem: {
      display: "flex",
      gap: 16,
      marginBottom: 28,
      alignItems: "flex-start",
    },

    iconBox: {
      padding: 14,
      borderRadius: 12,
      background: "#eff6ff",
      transition: "0.25s",
    },

    label: {
      fontWeight: 600,
      marginBottom: 4,
    },

    value: {
      color: "#64748b",
      textDecoration: "none",
    },

    card: {
      background: "white",
      borderRadius: 24,
      padding: 40,
      boxShadow: "0 15px 40px rgba(0,0,0,.12)",
      transition: "0.35s",
    },

    inputGroup: {
      marginBottom: 24,
    },

    inputLabel: {
      display: "block",
      marginBottom: 8,
      fontWeight: 600,
      fontSize: 14,
    },

    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: 12,
      border: "1px solid #cbd5e1",
      fontSize: 15,
      outline: "none",
      transition: "0.25s",
    },

    textarea: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: 12,
      border: "1px solid #cbd5e1",
      fontSize: 15,
      resize: "none",
      outline: "none",
      transition: "0.25s",
    },

    submit: {
      width: "100%",
      padding: "18px",
      borderRadius: 14,
      border: "none",
      background: "linear-gradient(135deg,#2563eb,#06b6d4)",
      color: "white",
      fontWeight: 700,
      fontSize: 17,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      transition: "0.25s",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <style>
        {`
        @keyframes gradient{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        `}
      </style>

      <div style={styles.container}>
        {/* Header */}
        <h2 style={styles.heading}>
          Get In <span style={styles.gradient}>Touch</span>
        </h2>
        <div style={styles.divider}></div>
        <p style={styles.subtitle}>
          Have a project in mind or want to collaborate? Let's connect!
        </p>

        <div style={styles.grid}>
          {/* Info */}
          <div>
            <div style={styles.infoTitle}>Let's talk about everything!</div>
            <div style={styles.infoText}>
              Feel free to reach out if you want to build something together,
              have a question, or just want to connect.
            </div>

            {/* Items */}
            <div style={styles.contactItem}>
              <div style={styles.iconBox}>
                <Mail size={22} color="#2563eb" />
              </div>
              <div>
                <div style={styles.label}>Email</div>
                <a href={`mailto:${personalInfo.email}`} style={styles.value}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.iconBox}>
                <Phone size={22} color="#2563eb" />
              </div>
              <div>
                <div style={styles.label}>Phone</div>
                <a href={`tel:${personalInfo.phone}`} style={styles.value}>
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.iconBox}>
                <MapPin size={22} color="#2563eb" />
              </div>
              <div>
                <div style={styles.label}>Location</div>
                <div style={styles.value}>{personalInfo.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
