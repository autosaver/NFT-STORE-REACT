import React, { useState } from 'react'

function AddFunds({setType}) {

    const [amount, setAmount] = useState("");

    const handlePayment=()=>{
        console.log("Funds Added",amount);
        setAmount("");
    }


  return (
    <div className='add_funds'>
    <div className="amount_input">
        <input type="text" placeholder='  Enter the amount...' value={amount} onChange={(e)=>setAmount(e.target.value)} />
    </div>
    <div className='wallet_control'>
    <button type='button' className='primary-btn' onClick={handlePayment}>Add Amount</button>
    <button type='button' className='primary-btn' onClick={()=>setType(0)}>Cancel</button>
    </div>
    </div>

  )
}

export default AddFunds