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



const Navbar = () => {
    const [Search, setSearch] = useState("");

    const [user, setUser] = useState(localStorage.getItem('token'));
    const [Login, setLogin] = useState(false);

    const [walletNav,setWalletNav]=useState(false);

    useEffect(() => {
      const token=localStorage.getItem('token');
      if(token){
        const loggedUser=jwtDecode(token);
        if(loggedUser)
            setUser(loggedUser);
        else
            localStorage.removeItem('token');
      }
    }, [Login])
    

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(false);
        setLogin(false);
    }
    const handleLogin = () => {
        setLogin(true);
    }
    const openWallet = () =>{
        setWalletNav(true);
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

                   {user && <div className="navbar-sign">
                        <Link to="/create">
                            <button type='button' className='primary-btn' >Create</button>
                        </Link>
                    </div>}
                </div>
            </div>
            <div className="navbar-sign">
                {user ? (
                    <>
                        <button type='button' className='secondary-btn' onClick={openWallet}><AccountBalanceWalletIcon/> 543.21 <CurrencyRupeeIcon fontSize="small"/></button>
                        <Link to="/"><p onClick={handleLogout}><LogoutIcon/></p></Link>
                    </>
                ) : (
                    <button type='button' className='primary-btn' onClick={handleLogin} ><LoginIcon/></button>
                )}
            </div>

        </div>
        {Login &&  <UserLogin setLogin={setLogin}/>}
        {walletNav && <WalletNav/>}
        </>
    )
}

export default Navbar
