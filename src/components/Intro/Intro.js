import FeedIcon from '@mui/icons-material/Feed';
import React from 'react';
import "./intro.css";
import bg from "./my.jpg";
import { Link } from 'react-scroll';
import btnImg from "./hireme.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import resume from "./Resume.pdf"

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>
          Hello,
        </span>
        <span className='introText'>I'm <span className='introName'>
            Yash</span> <br/> Website Developer </span>
        <p className='introPara'>I am skilled website developer with strong command on both frontend and <br/> backend with expirence of more than 1 year.</p>
        <div className='BtnLinks'>
        <a className='GitHubLink' href='https://github.com/yashyadav-08' ><button className='btn'><GitHubIcon className='GitHub'/>Github</button></a>
        <a className='download' href={resume} download="Resume.pdf" ><button className='Resume'><FeedIcon className='Feed'/>Resume</button></a>
         
        </div>
      </div>
      <img src={bg} alt="" className='bg' />
    </section>
  )
}

export default Intro;
