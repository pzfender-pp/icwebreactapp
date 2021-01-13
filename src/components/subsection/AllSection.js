import React from 'react';
import BackBtn from './BackBtn';
import Section5 from '../section/Section5';

import '../../style/subsection/AllSection.css';

import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';
import img7 from '../../img/img7.jpg';

const AllSection = () => {
  return (
    <React.Fragment>
      <section className="main">
        <BackBtn text="All"/>
        <div className="all-content"> 
          <div className="all-section">
            <img src={img4} alt="" />
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              laudantium nemo sint incidunt neque distinctio hic assumenda totam
              nulla officiis?
            </p>
          </div>
          <div className="all-section">
            <img src={img5} alt="" />
            <h2>Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              consequatur earum libero reiciendis pariatur nesciunt sit itaque
              temporibus! Sapiente, alias.
            </p>
          </div>
          <div className="all-section">
            <img src={img6} alt="" />
            <h2>Photo</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              doloribus? Quo unde reprehenderit cum laboriosam enim quae rem ex
              nobis.
            </p>
          </div>
          <div className="all-section">
            <img src={img7} alt="" />
            <h2>Coffee</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
              alias facere sunt cumque ad perferendis a, iusto inventore
              necessitatibus nemo.
            </p>
          </div>
        </div>
      </section>
      <Section5 />
    </React.Fragment>
  );
};

export default AllSection;