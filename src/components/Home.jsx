import React from 'react';
import Banner from './Banner';
import Collections from './Collections';
import Footer from './Footer';

import './styles/Home.css';

function Home({assets, collection_assets}) {


  const title="Discover, collect, and sell extraordinary NFTs. ArtCollector is the India's first and largest NFT marketplace";

  return (
    <>
      <div className="home">
        <div className="home_banner">
            <Banner title={title}/>
        </div>
        <div className="home_hot_seller">
            <Collections assets={assets.slice(0,5)}/>
        </div>
        <div className="home_top_collection">
            <Collections is_collection assets={collection_assets.slice(0,5)}/>
        </div>
        <div className="home_footer">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Home;
