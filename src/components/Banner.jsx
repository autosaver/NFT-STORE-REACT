import React from 'react'
import './styles/Banner.css'

import banner_Logo from './assets/banner_home.png'

function Banner({hero,title}) {

    const iscard=hero?true:false;

  return (
    <>
    <div className="explore_hero">
        <div className="hero_data">
            <div className="hero_info">
            <h1>{ iscard ? hero?.name : title}</h1>
            {iscard && <p>Owned by {hero?.asset_contract?.name} </p>}
            </div>
            {iscard && <div className='hero_buttons'> 
            <button type='button' className='primary-btn' >Buy Now</button>
            <button type='button' className='primary-btn' >More Info</button>
            </div>}
        </div>
        <div className="hero_img">
          <img src={iscard? hero?.image_url || hero?.image_thumbnail_url || hero?.image_preview_url: banner_Logo } alt="" />
        </div>
      </div>
    </>
  )
}

export default Banner