import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "react-bootstrap";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  /* ---------- Theme Styles ---------- */

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      width: "100%",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      background: "rgba(255,255,255,0.6)",
      borderBottom: "1px solid rgba(37,99,235,0.15)",
      boxShadow: "0 4px 25px rgba(37,99,235,0.08)",
      zIndex: 999,
    },
    container: {
      maxWidth: "1300px",
      margin: "0 auto",
      padding: "0 clamp(16px,4vw,40px)",
      height: "clamp(60px,8vw,78px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    logo: {
      fontSize: "clamp(1.3rem,2.5vw,1.7rem)",
      fontWeight: 800,
      letterSpacing: "1px",
      background: "linear-gradient(90deg,#2563eb,#06b6d4,#3b82f6)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      cursor: "pointer",
      textDecoration: "none",
      backgroundSize: "200% 200%",
      animation: "gradient 6s ease infinite",
    },

    menu: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(6px,1.4vw,18px)",
    },

    link: {
      padding: "8px clamp(12px,1.6vw,20px)",
      borderRadius: 10,
      fontSize: "clamp(14px,1.2vw,16px)",
      fontWeight: 500,
      color: "#60a5fa",
      textDecoration: "none",
      transition: "0.25s",
    },

    mobileBtn: {
      border: "none",
      background: "rgba(148,163,184,0.12)",
      padding: "10px",
      borderRadius: "12px",
      color: "#cbd5e1",
    },

    mobilePanel: {
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(18px)",
      borderTop: "1px solid rgba(148,163,184,0.15)",
      padding: "16px",
      animation: "slideDown 0.35s ease",
    },

    mobileLink: {
      display: "block",
      padding: "14px",
      borderRadius: 10,
      color: "#cbd5e1",
      textDecoration: "none",
      fontSize: "16px",
      marginBottom: "6px",
      transition: "0.25s",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          style={styles.logo}
        >
          BRT.
        </a>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={styles.menu}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={styles.link}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(59,130,246,0.15)";
                  e.target.style.color = "#60a5fa";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "#60a5fa";
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        {/* Mobile Button */}
        {isMobile && (
          <Button style={styles.mobileBtn} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div style={styles.mobilePanel}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              style={styles.mobileLink}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(59,130,246,0.15)";
                e.target.style.color = "#60a5fa";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#cbd5e1";
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @keyframes gradient{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        @keyframes slideDown{
          from{opacity:0; transform:translateY(-12px)}
          to{opacity:1; transform:translateY(0)}
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
