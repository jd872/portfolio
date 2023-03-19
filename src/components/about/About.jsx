import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about" id="about">
            <p>About Me</p>
            <div className="about_detail">
                <div className="about_avatar">
                    <img src="assets/avatar-2.svg" alt="" />
                </div>
                <div className="about_description">
                    <p>
                        Hi, I'm Jay Patel, a software engineer with over a year of experience in frontend development.
                        I specialize in creating responsive and dynamic user interfaces using React, Angular, and Python.
                        Throughout my career, I have worked on various projects, 
                        from developing complex web applications to designing intuitive user experiences. 
                        I have a deep passion for technology and a keen eye for detail, 
                        which enables me to deliver high-quality code that meets the highest standards of performance and usability. 
                        If you're looking for a talented developer who can bring your ideas to life and help you achieve your goals, look no further. 
                        Let's work together and create something amazing!
                    </p>
                    <button className="about_button">Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default About;
