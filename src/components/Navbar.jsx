import React, { useState } from 'react'
import './styles/Navbar.css'
import logo from './assets/logo.ico'
import { Link } from "react-router-dom";


const Navbar = () => {
    const [user, setUser] = useState(false)
    const [Search, setSearch] = useState("");

    const handleLogout = () => {
        setUser(false);
    }
    const handleLogin = () => {
        setUser(true);
    }

    return (
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
                        <p>Balance: 0 Rs</p>
                        <button type='button' className='secondary-btn'>Wallet</button>
                        {user && <Link to="/"><p onClick={handleLogout}>Logout</p></Link>}
                    </>
                ) : (
                    <button type='button' className='primary-btn' onClick={handleLogin} >G-Sign In</button>
                )}
            </div>
        </div>
    )
}

export default Navbar
