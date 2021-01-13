import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/subsection/BackBtn.css';

const BackBtn = ({text}) => {
  return (
    <header className="header">
      <Link to="/" className="back">Back</Link>
      <h1 className="heading">{text}</h1>
    </header>
  );
};

export default BackBtn;