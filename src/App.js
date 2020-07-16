import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const [scroll, setScroll] = useState(0);
  const navHeight = document.getElementsByClassName("nav");
  const headerHeight = document.getElementsByClassName("topHeader");
  // const width = window.innerWidth + 10;
  const [isLoading, toggleLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e.target);
    toggleLoading(true);

    emailjs
      .sendForm(
        "gmail",
        "template_TWfqH4kG",
        e.target,
        "user_tkYbcE8ZVidAQ6NYcoDse"
      )
      .then(
        (result) => {
          setStatus("Sent!");
          console.log(result.text);
        },
        (error) => {
          setStatus("Sorry - Try Again");
          console.log(error.text);
        }
      );
  };

  const contactBtn = status ? status : isLoading ? "Sending..." : "Send";

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <div className="App">
      <div className="jumbotron">
        <div
          className="topHeader"
          id={
            scroll === 0
              ? "transparent"
              : scroll > navHeight[0].offsetTop - headerHeight[0].clientHeight
              ? "static"
              : null
          }
        >
          <div className="logo">
            <img src={require("./logoS.png")} alt="logo" />
          </div>
          <div
            style={{
              display: "flex",
              background: "transparent",
              flexDirection: "column",
              width: "130px",
              paddingLeft: ".2em",
              color: "white",
            }}
          >
            <span
              style={{
                alignSelf: "center",
                borderBottom: "1.8px solid white",
                letterSpacing: ".05em",
                margin: ".6em 0",
                width: "100%",
                color: "white",
                paddingBottom: "3px",
                textShadow: "1px 1px 3px rgb(20,20,20)",
                // fontWeight: "bold",
              }}
            >
              Alberto Ortega
            </span>
            <span
              style={{
                fontSize: ".83em",
                // letterSpacing: "1px",
                textShadow: "1px 1px 3px rgb(20,20,20)",
                // fontWeight: "bold",
              }}
            >
              Full Stack Web Developer
            </span>
          </div>
        </div>
        <div className="welcome">
          <div>Welcome</div>
        </div>
      </div>
      <div className="main">
        <div className="nav">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="content" id="about">
          <div className="about">
            <div className="aboutMe">
              <h2>About Me</h2>
              <img
                src={require("./tie.jpeg")}
                alt="profile pic"
                id="profilePic"
              />
              <p>
                My name is Alberto Ortega and I graduated from Texas Christian
                University in 2020 with aspirations of becoming a Software
                Developer. I constantly seek discomfort and am always pushing to
                better myself in all aspects of life. My knack for problem
                solving and fascination with technology has led me to computer
                programming. When I'm not writing code, I enjoy spending time
                being active. I like to be out on the water surfing,
                wakeboarding, or even just swimming. When I'm not on the water,
                I love to practice brazilian jiu-jitsu and hope to compete one
                day. Einstein said it best:{" "}
                <span style={{ fontStyle: "italic" }}>
                  “I have no special talent. I am only passionately curious.”
                </span>
              </p>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>
                  <span id="skills">Languages: </span>Javascript, Python, Java
                </li>
                <li>
                  <span id="skills">Front End: </span>React, jQuery, HTML5/CSS3,
                  Bootstrap
                </li>
                <li>
                  <span id="skills">Back End: </span>NodeJS, SQL, MySQL, MongoDB
                </li>
                <li>
                  <span id="skills">Other Skills | Tools: </span>Git, AWS,
                  OAuth, npm
                </li>
              </ul>
            </div>
          </div>
          <div className="work" id="portfolio">
            <h2>Work</h2>
            <div className="work-content">
              <img
                src={require("./grill-time-screenshot.png")}
                alt="grill-time-app"
              />
              <div>
                <span className="app-name">Grill Time Calculator</span>
                <p>
                  A fully responsive web app that calculates estimated grilling
                  time based on user input such as type of meat, size, and
                  whether the grill is electric, gas or charcoal.
                </p>
                <p>
                  <span className="tech-used">Technologies used:</span>{" "}
                  JavaScript(ES6), React, CSS3, Flexbox & Grid, HTML5, npm, git
                </p>
                <div className="work-link-images">
                  <img
                    className="source-code"
                    src={require("./source-code.png")}
                    alt="git-source-code"
                    onClick={() =>
                      window.open(
                        "https://github.com/teg1776/grill-time",
                        "_blank"
                      )
                    }
                  />
                  <img
                    className="work-link"
                    alt="work-link"
                    onClick={() =>
                      window.open(
                        "https://teg1776.github.io/grill-time/",
                        "_blank"
                      )
                    }
                    src={require("./work-link.png")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="contact" id="contact">
            <h2>Contact</h2>
            <form onSubmit={sendEmail}>
              <label for="email">Email:</label>
              <input type="text" id="email" name="from_email" required />
              <br />
              <label for="subject">Subject:</label>
              <input type="text" id="subject" name="subject" />
              <br />
              <label for="message">Message:</label>
              <textarea name="message" required></textarea>
              <br />
              <input type="submit" id="submit" value={contactBtn} />
            </form>
          </div>
          <div className="links">
            <div>
              <img
                src={require("./git.png")}
                alt="github"
                onClick={() =>
                  window.open("https://github.com/teg1776", "_blank")
                }
              />
              <img
                src={require("./linkedin.png")}
                alt="linkedin"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/teg1776/", "_blank")
                }
              />
              <img
                src={require("./insta.png")}
                alt="instagram"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/o_r_t_e_g_a/",
                    "_blank"
                  )
                }
              />
              <img
                src={require("./youtube.png")}
                alt="youtube"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCzZWNSKH9XaRY1NzaQ0okNQ?view_as=subscriber",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
