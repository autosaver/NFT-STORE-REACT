import React, { useState } from 'react'

function WithdrawFunds({setType}) {

    const [amount, setAmount] = useState("")

    const handleWithdrawl=()=>{
    console.log("Amount Remove",amount);
    setAmount("");
}

  return (
    <div className='add_funds'>
    <div className="amount_input">
        <input type="text" placeholder='  Enter the amount...' value={amount} onChange={(e)=>setAmount(e.target.value)} />
    </div> 
    <div className='wallet_control'>
    <button type='button' className='primary-btn' onClick={handleWithdrawl}>Withdraw</button>
    <button type='button' className='primary-btn' onClick={()=>setType(0)}>Cancel</button>
    </div>
    </div>
  )
}

export default WithdrawFunds