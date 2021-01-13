import React from 'react';
import BackBtn from './BackBtn';
import Section5 from '../section/Section5';

import '../../style/subsection/DesignSection.css'

import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';

const DesignSection = () => {
  return (
    <React.Fragment>
      <section className="main">
          <BackBtn text="Design" />
          <div className="design-section">
            <img src={img1} alt="" />
            <div className="text">
              <h2>Heading 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad
                magni, natus rem iusto nemo earum repellat deserunt nulla adipisci
                cum possimus, molestiae nesciunt doloribus laudantium, soluta sed.
                Perferendis aliquam eos tenetur praesentium. Neque quia harum
                provident fuga, cupiditate hic!
              </p>
            </div>
          </div>
          <div className="design-section design-reverse">
            <img src={img2} alt="" />
            <div className="text">
              <h2>Heading 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                perferendis et sint debitis quidem ullam omnis ducimus at!
                Provident neque iusto quidem. Quasi repellendus voluptatibus harum
                eum animi delectus cum! Nesciunt blanditiis atque officiis.
                Dignissimos facilis repudiandae dolore blanditiis nulla.
              </p>
            </div>
          </div>
          <div className="design-section">
            <img src={img3} alt="" />
            <div className="text">
              <h2>Heading 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                in laborum at repudiandae maiores. Magnam officia placeat iste
                maiores ipsa. Libero natus, magni reprehenderit distinctio iure
                magnam est enim tempora cupiditate beatae porro ullam modi labore
                nisi necessitatibus quos corrupti?
              </p>
            </div>
          </div>
      </section>
      <Section5 />
    </React.Fragment>
  );
};

export default DesignSection;