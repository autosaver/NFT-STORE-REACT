const login_reducer=(state=false,action)=>{
    switch(action.type){
        case 'LOGIN':
            return !state;
        default:
            return state;
    }
};

export default login_reducer;