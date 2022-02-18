import React, { useState } from 'react';
import AddFunds from './AddFunds';
import './styles/WalletNav.css';
import TransactionCard from './TransactionCard';
import WalletContent from './WalletContent';
import WalletDetails from './WalletDetails';
import WithdrawFunds from './WithdrawFunds';



function WalletNav() {

  const [type, setType] = useState(0)

  const wallet={
    email:"adityasingh@gmail.com",
    balance:"543.21",
    transactions:[{id:"1"},{id:"2"},{id:"3"}],
  }
  return (
    <>
    <div className="wallet_nav">
        <div className="wallet_details">
            <WalletDetails wallet={wallet}/>
        </div>
        <br/>

        {type===0 && <WalletContent setType={setType} wallet={wallet}/>}
        {type===1 && <AddFunds setType={setType}/>}
        {type===2 && <WithdrawFunds setType={setType}/>}
        <br/><br/><br/>

        <div>Transactions:</div>
        <div className="wallet_transactions">
           {
             wallet?.transactions?.map((transaction)=>
             <div key={transaction.id}>
               <TransactionCard transaction={transaction}/>
            </div>)
           } 
        </div>
    </div>
    
    
    
    </>
  )
}

export default WalletNav