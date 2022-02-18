import React from 'react'


function WalletDetails({wallet}) {
  return (
    <>
        <div
        style={{
        padding:'10px',     
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
        borderRadius:'15px',
        }}
        
        >{wallet?.email}</div>
    </>
  )
}

export default WalletDetails