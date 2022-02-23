import React, { useEffect, useState } from 'react'
import './styles/Navbar.css'
import { Link } from "react-router-dom";

import logo from './assets/logo.ico'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import UserLogin from './Authentication/UserLogin';

import jwtDecode from 'jwt-decode';

import WalletNav from './Wallet/WalletNav';

import { login_action } from '../Redux/actions/Login_action';
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {
    const dispatch = useDispatch();

    const [Search, setSearch] = useState("");
    const [loginCard, setloginCard] = useState(false)
    const [walletNav,setWalletNav]=useState(false);


    const Login = useSelector(state => state.isLogged);
    const user = useSelector(state => state.user);
    const wallet = useSelector(state => state.wallet);

    useEffect(() => {
      const token=localStorage.getItem('token');
      if(token){
        const loggedUser=jwtDecode(token);
        if(loggedUser)
            dispatch(login_action());
        else
            localStorage.removeItem('token');
      }
    }, [dispatch]);
    

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(login_action());
        setWalletNav(false);
    }
    
    return (
        <>
        <div className='navbar'>
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={logo} alt="logo" />
                    <Link to="/">
                        <h1>Art-Collector</h1>
                    </Link>
                </div>
                <div className="navbar-links_container">

                    <input type="text"
                        value={Search}
                        onChange={e=>setSearch(e.target.value)}
                        placeholder='Search Items, Collections or Accounts' 
                        autoFocus={true} 
                    />
                    <Link to="/explore"><p>Explore</p> </Link>
                    <Link to="/collections"><p>Collections</p> </Link>
                    <Link to="/activity"><p>Activity</p> </Link>

                   {Login && <div className="navbar-sign">
                        <Link to="/create">
                            <button type='button' className='primary-btn' >Create</button>
                        </Link>
                    </div>}
                </div>
            </div>
            <div className="navbar-sign">
                {Login ? (
                    <>
                        <button type='button' className='secondary-btn' onClick={() =>setWalletNav(!walletNav)}>
                            <AccountBalanceWalletIcon/> {wallet?.balance} <CurrencyRupeeIcon fontSize="small"/>
                        </button>
                        <Link to="/"><p onClick={handleLogout}><LogoutIcon/></p></Link>
                    </>
                ) : (
                    <button type='button' className='primary-btn' onClick={() =>setloginCard(true)}>
                        <LoginIcon/>
                    </button>
                )}
            </div>

        </div>
        {loginCard &&  <UserLogin setloginCard={setloginCard}/>}
        {walletNav && <WalletNav wallet={{...wallet,email:user.email}} />}
        </>
    )
}

export default Navbar
