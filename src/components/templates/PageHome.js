import React, { useEffect } from "react";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import Header from "../Header";
import Footer from "../Footer";

const PageHome = () => {
  useEffect(() => {
    new Typed(".typedText", {
      strings: ["Cyber Security", "Content Writter", "Frontend Developer"],
      loop: true,
      typeSpeed: 120,
      backSpeed: 100,
      backDelay: 2020,
    });

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
  }, []);

  return (
    <div className="container">
      <Header />
      <main className="wrapper">
        <section className="featured-box" id="home">
          <div className="featured-text">
            <div className="featured-text-card">
              <span>HAIKAL SIREGAR</span>
            </div>
            <div className="featured-name">
              <p>
                I'M <span className="typedText"></span>
              </p>
            </div>
            <div className="featured-text-info">
              <p>A Frontend Developer with a passion for creating visually stunning and user friendly websites.</p>
            </div>
            <div className="featured-text-btn">
              <a href="https://drive.google.com/file/d/1f5PKnqLNpKU0oFj0ny1Wgh2rE7tQd1DE/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-dumb">
                <i className="uil uil-file-alt"></i> Download CV
              </a>
              <a href="mailto:haikalsiregar0x1337@gmail.com" className="btn-dumb blue-btn">
                <i className="uil uil-at"></i> Email Me
              </a>
            </div>
            <div className="social_icons">
              <div className="icon">
                <a href="https://instagram.com/sir.ikail">
                  <i className="uil uil-instagram"></i>
                </a>
              </div>
              <div className="icon">
                <a href="https://www.linkedin.com/in/sirhaikal/">
                  <i className="uil uil-linkedin-alt"></i>
                </a>
              </div>
              <div className="icon">
                <a href="https://dribbble.com/">
                  <i className="uil uil-dribbble"></i>
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/justikail">
                  <i className="uil uil-github-alt"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="featured-image">
            <div className="image">
              <img src="./img/profile.png" alt="Avatae" />
            </div>
          </div>
        </section>
        <section className="section" id="about">
          <div className="top-header">
            <h1>About Me</h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="about-info">
                <h3>Introduction My Self</h3>
                <p>I am well-versed in HTML, CSS, JavaScript, and Python. Additionally, I have experirence working with content management systems (CMS) like WordPress and Framework Like Laravel or CodeIgniter.</p>
              </div>
            </div>
            <div className="col">
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Frontend</h3>
                </div>
                <div className="skills-list">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>Tailwind</span>
                  <span>JavaScript</span>
                </div>
              </div>
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Backend</h3>
                </div>
                <div className="skills-list">
                  <span>PHP</span>
                  <span>Python</span>
                </div>
              </div>
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Database</h3>
                </div>
                <div className="skills-list">
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="projects">
          <div className="top-header">
            <h1>Projects</h1>
          </div>
          <div className="project-container">
            <div className="project-box">
              <div className="project-image">
                <img src="https://raw.githubusercontent.com/justikail/PhObfus/main/Preview%20-%201.png" alt="First Project" />
              </div>
              <div className="project-detail">
                <h3>
                  Title :{" "}
                  <a href="https://justikail.000webhostapp.com/" target="_blank" rel="noreferrer">
                    PhObfus
                  </a>
                </h3>
                <label>Description : Online PHP Code Obfuscator. Tools for encoding PHP scripts, with 4 options.</label>
                <span>&copy 01-09-2023</span>
              </div>
            </div>
            <div className="project-box">
              <div className="project-image">
                <img src="https://raw.githubusercontent.com/justikail/Chillyoo/main/img/preview.png" alt="Second Project" />
              </div>
              <div className="project-detail">
                <h3>
                  Title :{" "}
                  <a href="https://justikail.github.io/Chillyoo/" target="_blank" rel="noreferrer">
                    ChillYoo
                  </a>
                </h3>
                <label>Description : ChillYoo landing page. Landing page useful for promoting products from the 'ChillYoo' Stand with the main menu Pancong Lumer.</label>
                <span>&copy 10-11-2023</span>
              </div>
            </div>
            <div className="project-box">
              <div className="project-image">
                <img src="https://raw.githubusercontent.com/justikail/Pendataan-Pasien-Klinik-Sehat/main/demo/Demo%201.png" alt="Third Project" />
              </div>
              <div className="project-detail">
                <h3>
                  Title :{" "}
                  <a href="https://github.com/justikail/Pendataan-Pasien-Klinik-Sehat" target="_blank" rel="noreferrer">
                    Pendataan Pasien Klinik
                  </a>
                </h3>
                <label>Description : Pendataan Pasien Klinik Sehat. Useful tool to manage patients at the clinic based on CLI (Command Line Interface).</label>
                <span>&copy 15-12-2023</span>
              </div>
            </div>
            <div className="project-box">
              <div className="project-image">
                <img src="https://raw.githubusercontent.com/justikail/TiketKA_UIDesign/main/image/Desktop.png" alt="Fourth Project" />
              </div>
              <div className="project-detail">
                <h3>
                  Title :{" "}
                  <a href="https://justikail.github.io/TiketKA_UIDesign/" target="_blank" rel="noreferrer">
                    FrontEnd TiketKA
                  </a>
                </h3>
                <label>Description : FrontEnd Design TiketKA is a design for web TiketKA. TiketKA useful for purchasing train tickets.</label>
                <span>&copy 07-01-2024</span>
              </div>
            </div>
          </div>

          <button
            className="btn-project"
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            See more
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageHome;
