import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';

function Home(props) {
  const {name} = props;
  return (
  <>
  <Navbar name={name} />
  <News />
  </>
  )
}

export default Home;