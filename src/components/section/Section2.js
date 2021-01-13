import React from 'react';

const Section2 = () => {
  return (
    <section className="section-2 text-center" style={{maxWidth: '992px', margin: '0 auto'}}>
      <header className="mb-4 mt-5">
        <h2>SERVICES <span className="dot text-warning fs-1">.</span></h2>
      </header>
      <div className="wrapper container p-5">
        <div className="row">
          <div className="mb-5 col-md-4">
            <i className="far fa-edit icon fs-1 mb-3"></i>
            <h3>WEB DESIGN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,laudantium!</p>
          </div>
          <div className="mb-5 col-md-4">
            <i className="fas fa-cog icon fs-1 mb-3"></i>
            <h3>DEVELOPMENT</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,laudantium!</p>
          </div>
          <div className="mb-5 col-md-4">
            <i className="fab fa-apple icon fs-1 mb-3"></i>
            <h3>BRANDING</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,laudantium!</p>
          </div>
        </div>
        <div className="row">
          <div className="mb-5 col-md-4">
            <i className="far fa-edit icon fs-1 mb-3"></i>
            <h3>PHOTOGRAPHY</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,laudantium!</p>
          </div>
          <div className="mb-5 col-md-4">
            <i className="fas fa-cog icon fs-1 mb-3"></i>
            <h3>TYPOGRAPHY</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,laudantium!</p>
          </div>
          <div className="mb-5 col-md-4">
            <i className="fab fa-apple icon fs-1 mb-3"></i>
            <h3>UI DESIGN</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,laudantium!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;