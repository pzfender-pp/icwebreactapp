import React, { useEffect } from 'react';
import '../../style/section/section3.css'

const Section3 = () => {
  const targets = {
    clients: 1054,
    project: 154,
    award: 59,
    team: 34
  }
  const targetList = Object.values(targets);

  useEffect(() => {
    const el = document.querySelectorAll('.target');
    const warpper = document.querySelector('.wrapper-text');

    // create function for count number
    function count() {
      el.forEach((value, index) => {
        let initial = +value.innerHTML;
        let step = Math.floor(targetList[index] / 15);
        setInterval(() => {
          if (initial < targetList[index]) {
            value.innerHTML = initial += step;
          } else {
            clearInterval();
            value.innerHTML = targetList[index];
          }
        }, 40);
      });
    };
  
    // create function for tracking window scrolling to section 3
    function callCount() {
      if (window.scrollY - warpper.clientHeight > 800) {
        setTimeout(count, 300);
      }
    }
    window.addEventListener('scroll', callCount);
      
  }, [targetList])

  return (
    <section className="section-3">
      <div className="wrapper-bg">
        <div className="wrapper-text">
          <div>
            <h3 className="target">0</h3>
            <p>CLIENTS</p>
          </div>
          <div>
            <h3 className="target">0</h3>
            <p>PROJECT</p>
          </div>
          <div>
            <h3 className="target">0</h3>
            <p>AWARDS</p>
          </div>
          <div>
            <h3 className="target">0</h3>
            <p>TEAM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;