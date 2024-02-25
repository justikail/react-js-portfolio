import Header from "../Header";
import Footer from "../Footer";

const PageProjects = () => {
  return (
    <div className="container">
      <Header />
      <main className="wrapper">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageProjects;
