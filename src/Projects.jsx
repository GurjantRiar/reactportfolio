import React from "react";
import "./App.css";

const Projets = () => {
  return (
    <div>
      <section class="work" id="Projects">
        <h1>Projects</h1>
        <li>
          <a href="https://gurjantriar.github.io/project1/">project1</a>
        </li>
        <li>
          <a href="https://gurjantriar.github.io/Weatherdashboard/">
            {" "}
            Weatherdashboard
          </a>
        </li>
        <li>
          {" "}
          <a href="https://gurjantriar.github.io/workscheduler/">
            workscheduler
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/GurjantRiar/project1">
            Project1 Github url
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/GurjantRiar/Weatherdashboard">
            Weatherdashboard Github url
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/GurjantRiar/workscheduler">
            workscheduler Github url
          </a>
        </li>
      </section>
      <li>
        <a href="https://drive.google.com/file/d/1OimU_Ai3WdQZMdVnabTzg2oIAv3q3V8B/view?usp=sharing">
          Resume
        </a>
      </li>
    </div>
  );
};

export default Projets;
