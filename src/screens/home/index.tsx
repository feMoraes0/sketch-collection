import React from 'react';
import './style.css';
import Card from '../../components/card';

const Home = () => {
  return (
    <main id='home'>
      <form action='/'>
        <input type="text" placeholder='Search a project...'/>
      </form>
      <div className="projects">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Home;