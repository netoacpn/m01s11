import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Button = ({ to, text, onClick }) => {
  return (
    <Link to={to}>
      <button className="custom-button" onClick={onClick}>
        {text}
      </button>
    </Link>    
  );
};

export default Button;
