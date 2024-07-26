import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';

function Home(userName) {
  return (
  <>
  <Navbar userName={userName} />
  <News />
  </>
  )
}

export default Home;