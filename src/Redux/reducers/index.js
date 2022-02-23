import Funds_reducer from "./Funds_reducer";
import login_reducer from "./Login_reducer";
import User_reducer from "./User_reducer";
const { combineReducers } = require("redux");


const allreducers = combineReducers({
    isLogged:login_reducer,
    wallet: Funds_reducer,
    user:User_reducer,
})

export default allreducers;