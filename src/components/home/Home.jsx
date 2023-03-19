import React from "react";
import "./Home.css";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Home = () => {
  return (
    <div className="home">
      <div className="home_details">
        <div className="home_avatar">
          <img src="assets/avatar-1.svg" alt="" />
        </div>
        <p className="home_name">Jay Patel</p>
        <p className="home_role">I'm a Software Engineer.</p>
        <div className="home_social">
          <AiOutlineInstagram />
          <AiOutlineGithub />
          <AiOutlineLinkedin />
        </div>
        <div>
          <button className="home_button">Hire me</button>
        </div>
      </div>
      <div className="home_scroll_down">
        <span>Scroll Down</span>
        <span className="home_mouse">
          <span className="home_wheel"></span>
        </span>
      </div>
    </div>
  );
};

export default Home;
