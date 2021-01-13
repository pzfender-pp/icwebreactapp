import React from 'react';
import BackBtn from './BackBtn';
import Section5 from '../section/Section5';

import '../../style/subsection/BrandingSection.css'

import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';

const BrandingSection = () => {
  return (
    <React.Fragment>
      <section className="main">
          <BackBtn text="Branding"/>
          <div className="branding-section">
            <img src={img4} alt="" />
            <h2>Heading 1</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
              fugiat atque doloribus alias non! Explicabo perspiciatis nemo, eaque
              omnis molestias rerum quo sunt? Quas, natus? Neque repellendus vel,
              error eligendi sapiente ducimus soluta voluptates laboriosam et!
              Modi neque eaque sapiente, error vel illo fugiat porro incidunt
              accusamus id, obcaecati hic?
            </p>
          </div>
          <div className="branding-section">
            <img src={img5} alt="" />
            <h2>Heading 2</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
              fugiat atque doloribus alias non! Explicabo perspiciatis nemo, eaque
              omnis molestias rerum quo sunt? Quas, natus? Neque repellendus vel,
              error eligendi sapiente ducimus soluta voluptates laboriosam et!
              Modi neque eaque sapiente, error vel illo fugiat porro incidunt
              accusamus id, obcaecati hic?
            </p>
          </div>
          <div className="branding-section">
            <img src={img6} alt="" />
            <h2>Heading 3</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
              fugiat atque doloribus alias non! Explicabo perspiciatis nemo, eaque
              omnis molestias rerum quo sunt? Quas, natus? Neque repellendus vel,
              error eligendi sapiente ducimus soluta voluptates laboriosam et!
              Modi neque eaque sapiente, error vel illo fugiat porro incidunt
              accusamus id, obcaecati hic?
            </p>
          </div>
      </section>
      <Section5 />
    </React.Fragment>
  );
};

export default BrandingSection;