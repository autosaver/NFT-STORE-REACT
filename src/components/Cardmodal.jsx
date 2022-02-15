import React from "react";
import "./styles/Cardmodal.css";
import user_icon from './assets/usericon.png'


function Cardmodal({ asset, setModal }) {

  const diffOwnerCreater = asset?.creator?.address !== asset?.owner?.address;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal_close"><button onClick={() => setModal(false)}>X</button></div>
        <div className='item section__padding'>
          <div className="item-image">
            <img src={asset.image_url || asset?.image_thumbnail_url || asset?.image_preview_url} alt="item" />
            
            <div className="trait_carasaul">
              
              {asset?.traits.map((trait) => <div className="trait_card" key={trait?.trait_type}>
                <strong>{trait?.trait_type}</strong>
                <p>{trait?.value}</p>
                </div>
              )}
            </div>


          </div>
          <div className="item-content">
            <div className="item-content-title">
              <h1>{asset?.asset_contract?.name} {asset?.asset_contract?.nft_version}</h1>
              <p>From <span>4.5 ETH</span> ‧ 20 of 25 available</p>
            </div>
            <div className="item-content-creator">
              <div><p>creator</p></div>
              <div>
                <img src={asset?.creator?.profile_img_url || user_icon} alt="creator" />
                <p>{asset?.creator?.user?.username || `${asset?.owner?.address?.slice(0, 8)}...`} </p>
              </div>
              {diffOwnerCreater &&
                <div><p>Owner</p>
                  <div>
                    <img src={asset?.owner?.profile_img_url || user_icon} alt="Owner" />
                    <p>{asset?.creater?.owner?.username || `${asset?.owner?.address?.slice(0, 8)}...`} </p>
                  </div>
                </div>
              }
            </div>
            <div className="item-content-detail">
              <p>{asset.discription}</p>
            </div>
            <div className="item-content-buy">
              <button className="primary-btn">Buy For 4.5 ETH</button>
              <button className="secondary-btn">Make Bid</button>
            </div>


          </div>
        </div>




      </div>
    </div>
  );
}

export default Cardmodal;
