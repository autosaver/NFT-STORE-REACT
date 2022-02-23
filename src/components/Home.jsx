import React from 'react';
import Banner from './Banner';
import Collections from './Collections';
import Footer from './Footer';

import './styles/Home.css';

function Home({assets, collection_assets}) {


  const title="Discover, collect, and sell extraordinary NFTs.";

  return (
    <>
      <div className="home">
        <div className="home_banner">
            <Banner title={title}/>
        </div>
        <div className="home_hot_seller">
            <Collections cards_assets={assets.slice(0,8)}/>
        </div>
        <div className="home_top_collection">
            <Collections is_collection counter={8}/>
        </div>
        <div className="home_footer">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Home;
