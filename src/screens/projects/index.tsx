import React from 'react';
import './style.css';
import Card from '../../components/card';
import background from '../../assets/brain.svg';

const Projects = () => {
  return (
    <main id='project-container'>
      <img className='background-image' src={background} alt="background"/>
      <form action='/'>
        <input type="text" placeholder='Search a project...'/>
      </form>
      <div className="projects">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Projects;