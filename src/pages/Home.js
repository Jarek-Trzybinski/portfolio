import React from "react";
import "./Home.css";
import ProjectList from "../components/projectList/projectList";

export default function Home() {
  return (
    <div>
      <div className="App">
        <header class="header">
          <h2>Trzybiński</h2>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </nav>
        </header>
        <div class="about" id="about">
          <h1 className="hello">
            Hello, my name is Jarosław Trzybiński <br />
            and this is my
          </h1>
          <h1 class="name">FRONT-END PORTFOLIO</h1>
        </div>
        <ProjectList />
      </div>
    </div>
  );
}
