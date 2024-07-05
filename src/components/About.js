import React from "react";
import "./About.css";
import prof from "./prof.jpg"
const About = () => {
    return (
        <div className="About">
            <div className="about-text">
                <h1>Hi there,</h1>
                <h3>About me</h3>
                <p>Welcome to the About Photography Blog, where I share my thoughts and essays about photography. Whether you're a beginner or a seasoned veteran, there's something on this website that will pique your interest. The site is divided into several sections. This section covers the basics for anyone just starting or looking to discover different genres of photography. You can find various photographers in the masters section, as well as interesting stories or facts about pictures you may not know.</p>
                <div className="b">
                <button>Learn more</button>
                </div>
            </div>
            <div className="About-pic">
                <img src={prof} alt="pic image"/>
            </div>
        </div>
    )
}
export default About;