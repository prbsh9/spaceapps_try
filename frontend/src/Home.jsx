import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "./App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="screen1" smooth={true} duration={500}>
        Screen 1
      </Link>
      <Link to="screen2" smooth={true} duration={500}>
        Screen 2
      </Link>
    </nav>
  );
};

const Screen1 = () => {
  return (
    <Element name="screen1" className="screen screen1">
      <h1>Project Title</h1>
      <p>Project Motto</p>
      {/* Teammate images */}
    </Element>
  );
};

const Screen2 = () => {
  return (
    <Element name="screen2" className="screen screen2">
      <h2>Introduction</h2>
      <p>Project description goes here...</p>
      {/* More content */}
    </Element>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Your Project Name</p>
    </footer>
  );
};

function Home() {
  return (
    <div>
      <NavBar />
      <Screen1 />
      <Screen2 />
      <Footer />
    </div>
  );
}

export default Home;
