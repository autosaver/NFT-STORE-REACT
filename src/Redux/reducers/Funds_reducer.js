const InitialState={
    email:'aditya@gmail.com',
    balance:543.21,
    transactions:[{id:"1"},{id:"2"},{id:"3"}],
    collections:[],
    createdNFT:[]
}


const Funds_reducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'AddFunds':
            return {balance:state.balance+action.payload,transactions:[...state.transactions,{type:'AddFunds',amount:action.payload}]};
        case 'RemoveFunds':
            return {balance:state.balance-action.payload,transactions:[...state.transactions,{type:'RemoveFunds',amount:action.payload}]};
        case 'BuyCollection':
            return {balance:state.balance-action.payload.price,transactions:[...state.transactions,{type:'Buy',collection:action.payload.id}]};
        case 'SellCollection':
            return {balance:state.balance+action.payload.price,transactions:[...state.transactions,{type:'Sell',collection:action.payload.id}]};
        default:
            return state;
    }
};

export default Funds_reducer;