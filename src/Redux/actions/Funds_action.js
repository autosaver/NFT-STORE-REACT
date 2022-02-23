export const add_funds=(amount)=>{
    return{
        type:"AddFunds",
        payload:amount
    }
};

export const remove_funds=(amount)=>{
    return{
        type:"RemoveFunds",
        payload:amount
    }
};

