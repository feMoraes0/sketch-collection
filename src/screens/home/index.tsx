import React from 'react';
import './style.css';

const Home = () => {
  return (
    <main id='home'>
      <form action='/'>
        <input type="text" placeholder='Search a project...'/>
      </form>
      <div className="projects">
        <div className="project-card">
          <img src="https://via.placeholder.com/192" alt=""/>
          <div className="project-card-body">
            <h5>Level</h5>
            <h3>Project Name</h3>
            <button>See more...</button>
          </div>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/1920x1080" alt=""/>
          <div className="project-card-body">
            <h5>Level</h5>
            <h3>Project Name</h3>
            <button>See more...</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;