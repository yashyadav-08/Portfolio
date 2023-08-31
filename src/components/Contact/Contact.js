import React, { useRef } from "react";
import "./Contact.css";
import YouTubeIcon from "./youtube.png";
import InstagramIcon from "./instagram.png";
import emailjs from "@emailjs/browser";
import CodeIcon from "@mui/icons-material/Code";

const Contact = () => {
  const form = useRef();
  // Function for sending Email
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_te1300m",
        "template_zlhsgeb",
        form.current,
        "M7NGFNTPJ_VG6ixYAU8Dq"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Send!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <h2 className="projecttext">Project Demonstations</h2>

      {/* Demo Container will contain all the demo project Cards */}
      <div id="clients" className="demoContainer">
        {/* First Card for Password App */}
        <div className="Card">
          <h2 className="password">Password Generator App </h2>
          <iframe
            width="400rem"
            height="260rem"
            src="https://www.youtube.com/embed/bCe35M5Hy1Y?si=8KOIU7xspyTsiP-k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <span className="PassText">
            Project 1
            <a href="https://github.com/yashyadav-08/password">
              <button className="Gitbtn">
                {" "}
                Get <CodeIcon />
              </button>
            </a>
          </span>
        </div>
        
        {/* Second Card for Space-game */}
        <div className="Card">
          <h2 className="password">Space-war Game</h2>
          <iframe
            width="400rem"
            height="260rem"
            src="https://www.youtube.com/embed/aWAMMrFYoSA?si=6IP_05CqdbrPRRti"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <span className="PassText">
            Project 2
            <a href="https://yashyadav-08.github.io/space-war/">
              <button className="Gitbtn-space">Play</button>
            </a>
          </span>
        </div>
         
         {/* Third Card for Signal Clone app */}
        <div className="Card">
          <h2 className="password">Signal Clone</h2>
          <iframe
            width="400rem"
            height="260rem"
            src="https://www.youtube.com/embed/s9zo-mCJS1E?si=nR5NvvPCy2Y-cwS0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <span className="PassText">
            Project 3
            <a href="https://github.com/yashyadav-08/Signal-clone">
              <button className="Gitbtn">
                {" "}
                Get <CodeIcon />
              </button>
            </a>
          </span>
        </div>
      </div>
     
      {/* Creating the Contact Form */}
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          {" "}
          Please fill out the form below to discuss any work oppurtunities{" "}
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="submitBtn" value="Send">
            Submit
          </button>
          <div className="links">
            <a href="https://www.youtube.com/channel/UCnmUAi1EFgLRxa2ndypzrmA">
              <img src={YouTubeIcon} alt="Youtube" className="link" />
            </a>
            <a href="https://www.instagram.com/uncrowned.07/">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
