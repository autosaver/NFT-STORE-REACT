import React from 'react';
import AuthForm from './AuthForm';
import './UserLogin.css';

function UserLogin({setloginCard}) {
    
    return (
        <div className="loginBackground">
            <div className="loginContainer">
                <div className="login_close"><button onClick={() => setloginCard(false)}>X</button></div>
                <div className='login_sections'>
                    <div className="login_form">
                        <AuthForm setloginCard={setloginCard}/>
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