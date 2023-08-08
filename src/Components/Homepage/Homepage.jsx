import React from 'react';
import Navbar from './Navbar';
import SearchHome from './SearchHome';
import Cards from './Cards';

const Homepage = () => {
  return (
    <div className='homepage'>
      <Navbar/>
      <SearchHome/>
      <Cards/>
    </div>
  )
}

export default Homepage
