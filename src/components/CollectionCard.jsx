import React from 'react'

import './styles/CollectionCard.css'


function CollectionCard({ asset }) {
    return (
        
        <div className='collection_card'>
            <div className="collection_top">
                <div className="collection_banner">
                    <img src={asset?.banner_image_url} alt="banner" />
                </div>
                <div className="profile_pic">
                    <img src={asset?.image_url} alt="profile" />
                </div>
            </div>
            <div className="collection_data">
                <div className="collection_name">
                    <strong>{asset.name}</strong>
                </div>
                <div className="collection_disc">
                    {asset?.description.slice(0,50) || asset?.name}...
                </div>
            </div>
        </div>
        
    )
}

export default CollectionCard