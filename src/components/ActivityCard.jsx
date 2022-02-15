import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import './styles/ActivityCard.css'


function ActivityCard({data}) {

  const infoClick=(userId)=>{
    window.open('https://opensea.io/'+userId);
  }

  
  const ethPrice=parseInt(data?.price?.quantityInEth)/Math.pow(10,18);

  const inrPrice=(80*data?.price?.asset?.usdSpotPrice*ethPrice).toFixed(2);

  return (
    <div>
      <div className="card_type">
        <ShoppingCartIcon color="primary" /> Sale
      </div>
      <div className="card_item">
        <img src={data?.assetQuantity?.asset?.imageUrl} alt="" />
        <div>
          <div style={{fontSize:'12px',opacity:'0.5'}}>{data?.assetQuantity?.asset?.collection?.name}</div>
          <div>{data?.assetQuantity?.asset?.name}</div>
        </div>
      </div>
      <div className="card_price">
        <div><CurrencyRupeeIcon fontSize='5px' />{inrPrice}</div>
        <div><img src={data?.price?.asset?.imageUrl} alt="" width='15px' height='15px' />{ethPrice}</div>
      </div>
      <div className="card_quantity">
      {data?.assetQuantity?.quantity}
      </div>
      <div className="userinfo" onClick={()=>infoClick(data?.seller?.displayName)}>
        {data?.seller?.displayName}
      </div>
      <div className="userinfo" onClick={()=>infoClick(data?.winnerAccount?.displayName)}>
        {data?.winnerAccount?.displayName}
      </div>
      <div className="card_timestamp">
        {data?.eventTimestamp}
      </div>

    </div>
  )
}

export default ActivityCard