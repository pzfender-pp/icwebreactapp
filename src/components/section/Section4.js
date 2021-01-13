import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/section/section4.css';

import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';
import img7 from '../../img/img7.jpg';
import img8 from '../../img/img8.jpg';

const Section4 = () => {
  const imgList = [img1, img2, img3, img4, img5, img6, img7, img8];

  const renderImg = imgList.map(pic => {
    return <img key={pic} src={pic} alt="showcase"/>
  });

  return (
    <section className="section-4">
      <header className="header-4">
        <h2>GREAT WORK<span className="text-yellow">.</span></h2>
        <nav>
          <ul>
            <Link to="/all" className="link-text text-yellow"><li>All</li></Link>
            <Link to="/branding" className="link-text"><li>BRANDING</li></Link>
            <Link to="/design" className="link-text"><li>DESIGN</li></Link>
            <Link to="/photo" className="link-text"><li>PHOTO</li></Link>
            <Link to="/coffee" className="link-text"><li>COFFEE</li></Link>
          </ul>
        </nav>
      </header>
      <div className="list-img">
        {renderImg}
      </div>
    </section>
  );
};

export default Section4;