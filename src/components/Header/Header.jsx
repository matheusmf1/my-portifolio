import React from "react";

import { greetings } from "../../assets/portfolio";
import Headroom from "react-headroom";

import './header.css';

export const Header = () => {

  return(
  
    <Headroom>
      <header className={"dark-menu header"}>

        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{ greetings.name}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn"/>

        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={"navicon"}></span>
        </label>

        <ul className="menu">
          
          <li>
            <a href="#greetings">Inicio</a>
          </li>

          <li>
            <a href="#skills">Habilidades</a>
          </li>
        
          <li>
            <a href="#education">Educação</a>
          </li>
        
          <li>
            <a href="#experience">Experiência</a>
          </li>

          <li>
            <a href="#projects">Projetos</a>
          </li>

        </ul>
      </header>
    </Headroom>
  );
}