import React from 'react';
import './style.css';
import background from '../../assets/background-home.png';
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';

const Home = () => {
  return (
    <main id='home-container'>
      <div className="infos">
        <h1>Clone Challenges</h1>
        <h3>Etiam commodo feugiat lectus malesuada mollis. Nam eu convallis magna, vel laoreet eros. Vivamus feugiat scelerisque leo vitae sodales. Nam ut ullamcorper ipsum, et volutpat nisl. Duis tempus suscipit ante, sed mollis nibh auctor sit amet. Cras sed elementum urna. In lacinia dictum metus, nec pulvinar urna ornare luctus.</h3>
        <Link to='/projects'>
          <button>
            <div>
              <FiCornerDownRight size={20} />
            </div>
            <p>Enter</p>
          </button>
        </Link>
      </div>
      <div className="image">
        <img src={background} alt=""/>
      </div>
    </main>
  );
}

export default Home;