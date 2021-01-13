import React from 'react';
import BackBtn from './BackBtn';
import Section5 from '../section/Section5';

import '../../style/subsection/PhotoSection.css'

import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';
import img7 from '../../img/img7.jpg';

const PhotoSection = () => {
  return (
    <React.Fragment>
      <section className="main">
        <BackBtn text="Photo"/>
        <div className="photo-section">
          <img src={img4} alt="" />
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
        <div className="photo-section">
          <img src={img5} alt="" />
          <div className="text">
            <h2>Heading 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad
              magni, natus rem iusto nemo earum repellat deserunt nulla adipisci
              cum possimus, molestiae nesciunt doloribus laudantium, soluta sed.
              Perferendis aliquam eos tenetur praesentium. Neque quia harum
              provident fuga, cupiditate hic!
            </p>
          </div>
        </div>
        <div className="photo-section">
          <img src={img6} alt="" />
          <div className="text">
            <h2>Heading 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad
              magni, natus rem iusto nemo earum repellat deserunt nulla adipisci
              cum possimus, molestiae nesciunt doloribus laudantium, soluta sed.
              Perferendis aliquam eos tenetur praesentium. Neque quia harum
              provident fuga, cupiditate hic!
            </p>
          </div>
        </div>
        <div className="photo-section">
          <img src={img7} alt="" />
          <div className="text">
            <h2>Heading 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad
              magni, natus rem iusto nemo earum repellat deserunt nulla adipisci
              cum possimus, molestiae nesciunt doloribus laudantium, soluta sed.
              Perferendis aliquam eos tenetur praesentium. Neque quia harum
              provident fuga, cupiditate hic!
            </p>
          </div>
        </div>
      </section>
      <Section5 />
    </React.Fragment>
  );
};

export default PhotoSection;