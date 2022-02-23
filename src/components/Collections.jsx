import React,{useEffect, useState} from 'react';
import Card from './Card';
import CollectionCard from './CollectionCard';
import './styles/Collections.css'

const getData=async(offset)=>{
  const res= await (await fetch(`https://api.opensea.io/api/v1/collections?format=json&limit=300&offset=${offset}`)).json();
  const filtered_data = res?.collections?.filter(item => item?.stats?.count>1 && item?.stats?.total_supply>1 && item.banner_image_url && item.image_url);
  return filtered_data;
}

function Collections({ cards_assets, is_collection, counter }) {
  const [assets, setAssets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    let data=[];
    let offset=0;
    while(is_collection && data.length<counter){
      const res= await getData(offset++);
      data=data.concat(res);
      setAssets(data);
      // console.log("Fetching data...",data.length);
    }
  }
  fetchData();
  }, [counter, is_collection]);

  return (
    <div className="collections">
        <div className="collection_title">
          {is_collection ? <h2>Hot Sellers</h2>:<h2>Trending NFT's Today</h2>}
        </div>
      <div className="collection_body">
        {
          is_collection ?
            assets.slice(0,counter).map((asset,id) => <div key={id}><CollectionCard asset={asset} /></div>) :
            cards_assets?.map((asset,id) => <div key={id}><Card asset={asset} /></div>)
        }
      </div>
    </div>

  )
}

export default Collections;
