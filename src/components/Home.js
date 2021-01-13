import React from 'react';

import Section1 from './section/Section1';
import Section2 from './section/Section2';
import Section3 from './section/Section3';
import Section4 from './section/Section4';
import Section5 from './section/Section5';

const Home = () => {
  return (
    <React.Fragment>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </React.Fragment>
  );
};

export default Home;