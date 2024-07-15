import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import iconGit from "./assets/iconGitHeader.svg";
import iconLinkedin from "./assets/iconLinkedinHeader.svg";
import iconGitFooter from "./assets/iconGitFooter.svg";
import iconLinkedinFooter from "./assets/iconLinkedinFooter.svg";
import iconFigmaFooter from "./assets/iconFigmaFooter.svg";

function App({ data }) {
  console.log(data);
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="navbar">
        <div className="list1">
          <ul>
            <li>Projetos</li>
            <li>Tecnologias</li>
            <li>Sobre mim</li>
          </ul>
        </div>
        <div className="list2">
          <ul>
            <li>
              <img src={iconGit} alt="" />
            </li>
            <li>
              <img src={iconLinkedin} alt="" />
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="TitleContentMain">
          <h1>
            Olá, eu sou Rodrigo Sobral<br></br> Desenvolvedor Full-stack
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button>Saber mais</button>
        </div>
        <div className="projectsContentMain">
          <h1 className="titleProjects">Projetos</h1>
          <div className="cards">
            {data.map((projeto, index) => (
              <div key={index} className="cardsContent">
                <img src={projeto.imgPath} alt="" />
                <h1>{projeto.title}</h1>
                <p>{projeto.description}</p>
                <div className="link">
                  <a href={projeto.link} target="blanck">
                    <button>Clique aqui</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="aboutContentMain">
          <h1>Sobre mim</h1>
          <div className="timeline">
            <div className="line-area"></div>
            <div className="itemTimeline">
              <span>2018</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="itemTimeline">
              <span>2019</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="itemTimeline">
              <span>2020</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="itemTimeline">
              <span>2021</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="contatoContent">
        <div className="displayFlexContato">
          <div className="textContato">
            <p>Meu contato:</p>
            <p>12 988888888</p>
          </div>
          <div className="textContato">
            <p>Email:</p>
            <p>xxx@xyz.com</p>
          </div>
        </div>
        <div className="redesSociais">
          <img src={iconGitFooter} alt="" />
          <img src={iconLinkedinFooter} alt="" />
          <img src={iconFigmaFooter} alt="" />
        </div>
      </footer>
    </>
  );
}

export default App;
