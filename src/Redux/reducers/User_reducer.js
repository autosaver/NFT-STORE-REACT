const InitialState={
    name:"aditya",
    email:"aditya@gmail.com",
    profileImg:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
    bannerImage:'',
}

const User_reducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'setprofileImg':
            return {...state,profileImg:action.payload};
        case 'setbannerImage':
            return {...state,bannerImage:action.payload};
        case 'LogInUser':
            console.log("Start User Fetching");
                return state;
        case 'LogOutUser':
            return InitialState;
        default:
            return state;
    }
};

export default User_reducer;