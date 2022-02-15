import React from 'react';
import Card from './Card';
import CollectionCard from './CollectionCard';
import './styles/Collections.css'

function Collections({ is_collection, assets }) {

  return (
    <div className="collections">
        <div className="collection_title">
          {is_collection ? <h2>Hot Sellers</h2>:<h2>Trending NFT's Today</h2>}
        </div>
      <div className="collection_body">
        {
          is_collection ?
            assets?.map((asset) => <div key={asset?.created_date}><CollectionCard asset={asset} /></div>) :
            assets?.map((asset) => <div key={asset?.id}><Card asset={asset} /></div>)
        }
      </div>
    </div>

  )
}

export default Collections;
