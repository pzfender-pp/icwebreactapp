import React, { useState, useEffect } from 'react';
import homebg0 from '../../img/homebg-0.jpg';
import homebg1 from '../../img/homebg-1.jpg';
import homebg2 from '../../img/homebg-2.jpg';
import '../../style/section/section1.css'


const Section1 = () => {
  const [count, setCount] = useState(0);

  // useEffect for change background image
  useEffect(() => {
    const section1 = document.querySelector('.section-1');
    const currentPos = document.querySelectorAll('.curr');
    const bgList = [homebg0, homebg1, homebg2];

    // Automatic change background
    function updateBg () {
      if (count < 3) {
        section1.style.background = `url('${bgList[count]}') no-repeat center center/cover`;
        currentPos[count].style.backgroundColor = '#fff';
        let timer = setTimeout(() => {
          currentPos[count].style.backgroundColor = 'transparent';
          setCount(prevCount => prevCount + 1);
        }, 3000);
  
        // Click for change background and tracking
        currentPos.forEach((value, index) => {
          value.addEventListener('click', () => {
            clearTimeout(timer);
            setCount(prevCount => prevCount = index);
            currentPos[count].style.backgroundColor = 'transparent';
            currentPos[index].style.backgroundColor = '#fff';
          });
        });
        return timer
      } else { setCount(0); }
    }

    const timer =  updateBg();
    
    // fix problem memory leak 
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <section className="section-1">
      <div className="contain">
        <header className="header-1">
          <h1>&lt;/&gt; Developer</h1>
          <nav className="isShow">
            <ul>
              <li><a href="/#">HOME <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/#">ABOUT US <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/#">NEWS <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/#">CONTACT <i className="fas fa-chevron-down"></i></a></li>
            </ul>
          </nav>
        </header>
        <div className="content-1">
          <h2>DEVELOPMENT</h2>
          <p>We are web developer</p>
          <div className="all-btn">
            <button className="button isShow">READ MORE</button>
            <button className="button">LEAN MORE</button>
          </div>
        </div>
        <footer className="current-pos">
          <div className="curr curr1"></div>
          <div className="curr curr2"></div>
          <div className="curr curr3"></div>
        </footer>
      </div>
    </section>
  );
};

export default Section1;