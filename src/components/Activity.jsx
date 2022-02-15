import React from 'react';
import ActivityCard from './ActivityCard';
import './styles/Activity.css';


function Activity({activity_data}) {

  const handleClick=()=>{
    console.log("Card Open Here");
  }

  return (
    <div className='activity'>
        <div className="activity_category">
            <div>Type</div>
            <div style={{flexBasis:'10%'}}>Item</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>From</div>
            <div>To</div>
            <div>Time</div>
        </div>
        <div className="activity_cards">
            {
                activity_data?.map((data)=>
                  <div className='activity_card' onClick={()=>{handleClick()}} key={data.node?.id}><ActivityCard data={data.node}/></div>
                )
            }
        </div>
    </div>
  );
}

export default Activity;