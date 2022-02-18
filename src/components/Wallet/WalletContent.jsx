import React from 'react'
import './styles/WalletContent.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function WalletContent({wallet,setType}) {
  return ( 
    <div className='wallet_content' >
        <div>Total Balance </div>
        <div className="wallet_balance">{wallet?.balance}<CurrencyRupeeIcon sx={{ fontSize: 30 }}/></div>
        <div className='wallet_control'>
        <button type='button' className='primary-btn' onClick={()=>setType(1)}>Add Funds</button>
        <button type='button' className='primary-btn' onClick={()=>setType(2)}>Withdraw</button>
        </div>
    </div>
  )
}

export default WalletContent