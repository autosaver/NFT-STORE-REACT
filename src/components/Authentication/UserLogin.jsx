import React from 'react';
import AuthForm from './AuthForm';
import './UserLogin.css';

function UserLogin({setLogin}) {


    return (
        <div className="loginBackground">
            <div className="loginContainer">
                <div className="login_close"><button onClick={() => setLogin(false)}>X</button></div>
                <div className='login_sections'>
                    <div className="login_form">
                        <AuthForm setLogin={setLogin}/>
                    </div>
                    <div className="login_third_party">
                        <button  type='button' className='primary-btn'>Google</button>
                        <button type='button' className='primary-btn' >Connect Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserLogin