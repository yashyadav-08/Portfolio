import React from 'react';
import "./Works.css";
// importing all the works
import Portfolio1 from "./portfolio-1.png";
import Portfolio2 from "./portfolio-2.png";
import Portfolio3 from "./portfolio-3.png";
import Portfolio4 from "./portfolio-4.png";
import Portfolio5 from "./portfolio-5.png";
import Portfolio6 from "./portfolio-6.png";
import { Link } from 'react-scroll';


const Works = () => {
  return (
    <section  id='works'>
      <h2 className='worksTitle'>
       My Portfolio
      </h2>
      <span className='workDesc'>
        I take pride in paying attention to the smallest details and make sure that my work is pixal perfect. I am excited to bring my skills and exprience to help businesses achieve their goals and create a strong online presence.
      </span>
      {/* WorkImgs will contain all the work */}
      <div className='worksImgs'>
        <img src={Portfolio1} alt='' className='worksImg' />
        <img src={Portfolio2} alt='' className='worksImg' />
        <img src={Portfolio3} alt='' className='worksImg' />
        <img src={Portfolio4} alt='' className='worksImg' />
        <img src={Portfolio5} alt='' className='worksImg' />
        <img src={Portfolio6} alt='' className='worksImg' />

      </div>
      {/* See More button */}
      <a><button className='workBtn'>See More</button></a>
       <div>
       
    </div>
    </section>
  )
}

export default Works;
