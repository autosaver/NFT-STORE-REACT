import React, { useState } from 'react'
import Cardmodal from './Cardmodal';
import './styles/Card.css'


function Card({ asset }) {

    const [Modal, setModal] = useState(false);

    return (
        <>
            <div className="card-column" onClick={() => setModal(true)} >
                <div className="bids-card">
                    <div className="bids-card-top">
                        <img src={asset.image_url || asset?.image_thumbnail_url || asset?.image_preview_url} alt="..." />
                        <p className="bids-title">{asset.name}</p>
                    </div>
                    {<div className="bids-card-bottom">
                        <p>1.25 <span>ETH</span></p>
                        <p>Heart: 92</p>
                    </div>}
                </div>
            </div>
            {Modal  && <Cardmodal asset={asset} setModal={setModal} />}

        </>
    )
}

export default Card



