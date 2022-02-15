import React, { useEffect, useState, useRef } from 'react';

import { styles } from '../styles/SupportAvatar.js';
import ChatIcon from '@mui/icons-material/Chat';

import SupportWindow from './SupportWindow.jsx';
import axios from 'axios';


function SupportAvatar(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const [hovered, setHovered] = useState(false)
    const [visible, setvisible] = useState(false)
    const [chat, setChat] = useState(null)

    const user = {
        name: "YOYO Aditya",
        email: "aditya2@gmail.com"
    }
    const handleSupport = async () => {
        setvisible(!visible);
        await getOrCreateUser(async(user) => { await getOrCreateChat(chat => { setChat(chat) }) })
    }


    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setvisible(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    async function getOrCreateUser(callback) {
        await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: user.email,
                email: user.email,
                secret: user.email
            },
            { headers: { "Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY } }
        )
            .then(r => callback(r.data))
            .catch(e => console.log('Get or create user error', e))
    }

    async function getOrCreateChat(callback) {
        await axios.put(
            'https://api.chatengine.io/chats/',
            { usernames: [user.email, 'Support-ART'], is_direct_chat: true },
            {
                headers: {
                    "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
                    "User-Name": user.email,
                    "User-Secret": user.email,
                }
            }
        )
            .then(r => callback(r.data))
            .catch(e => console.log('Get or create chat error', e))
    }



    return (
        <div ref={wrapperRef}>

            <SupportWindow user={user} chat={chat} visible={visible} />

            <div style={props.style}>
                <div
                    className='transition-3'
                    style={{
                        ...styles.avatarHello,
                        ...{ opacity: hovered ? '1' : '0' }
                    }}
                >
                    Can I help You?
                </div>

                <ChatIcon
                    color="secondary"
                    fontSize="small"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={handleSupport}
                    style={{
                        ...styles.chatWithMeButton,
                        ...{ border: hovered ? '1px solid rgba(50, 200, 240,0.75)' : '' }
                    }}
                />
            </div>
        </div>
    )
}

export default SupportAvatar