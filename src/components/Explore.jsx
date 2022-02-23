import React from 'react';
import Banner from './Banner';
import Collections from './Collections';
import './styles/Explore.css'


function Explore({ assets }) {

  const hero = assets[0];

  return (
    <div className="explore">
      <Banner hero={hero}/>
      <div className="explore_collections">
        <Collections cards_assets={assets}/>
      </div>
    </div>

  )
}

export default Explore;

