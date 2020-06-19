import React from 'react';
import './style.css';
import { FiDownload } from 'react-icons/fi';

const Card = () => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/192" alt=""/>
      <div className="card-body">
        <div>
          <h4>00/00/00</h4>
          <a href="/">
            <FiDownload />
          </a>
        </div>
        <div>
          <h4>Level</h4>
          <h2>Project Name</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;