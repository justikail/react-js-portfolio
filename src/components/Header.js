import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });

    sr.reveal(".project-box", { interval: 200 });

    sr.reveal(".top-header", {});

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 100 });

    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    }

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="header">
      <div className="nav-menu-btn">
        <i className={`uil ${menuOpen ? "uil-times" : "uil-bars"}`} onClick={toggleMenu}></i>
        <a href="//wa.me/6285871428510" target="_blank" rel="noreferrer">
          +62 858-7142-8510
        </a>
      </div>
      <div className={`nav-menu ${menuOpen ? "responsive" : ""}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="/" className={`nav-link ${activeSection === "home" ? "active-link" : ""}`}>
              Home
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className={`nav-link ${activeSection === "about" ? "active-link" : ""}`}>
              About
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="/projects" className={`nav-link ${activeSection === "projects" ? "active-link" : ""}`}>
              Projects
            </a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button
          className="btn-new"
          onClick={() => {
            window.location.href = "/projects";
          }}
        >
          New Project<i className="uil uil-star"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
