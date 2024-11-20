import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './hero/Hero';
import Navbar from '../../components/header/Navbar';
import Cards from './card/Cards';
import Industry from './industry/Industry';
import Bussiness from './bussiness/Bussiness';


const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <br /><br />
      <Cards />
      <br /><br />
      <Industry />
      <br /><br />
      <Bussiness />
    </div>
  );
}

export default Home;
