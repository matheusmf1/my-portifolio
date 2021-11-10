import React from "react";

import { greetings } from "../../assets/portfolio";
import Headroom from "react-headroom";

import './header.css';

export const Header = () => {

  const dropMenu = ( e ) => {
    console.log('ooi')
    // let test = document.getElementById("menu");

    // test.classList.toggle("subMenu")
    // test.classList.toggle("menu")
  }

  return(
  
    <Headroom>
      <header className={"dark-menu header"}>

        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{ greetings.name}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" onClick={dropMenu}/>

        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={"navicon"}></span>
        </label>

        <ul className={"menu"} id="menu" >
          
          <li>
            <a href="#skills">Habilidades</a>
          </li>
        
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
        
          <li>
            <a href="#opensource">Open Source</a>
          </li>
        
          <li>
            <a href="#achievements">Achievements</a>
          </li>
        
          <li>
            <a href="#blogs">Blogs</a>
          </li>
        
          <li>
            <a href="#talks">Talks</a>
          </li>
        
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}