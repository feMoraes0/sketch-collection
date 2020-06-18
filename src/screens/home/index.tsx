import React from 'react';
import './style.css';

const Home = () => {
  return (
    <main id='home'>
      <form action='/'>
        <input type="text" placeholder='Search a project...'/>
      </form>
    </main>
  );
}

export default Home;