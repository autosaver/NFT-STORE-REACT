import React from 'react'

import { styles } from '../styles/SupportAvatar.js'
import ChatEngine from './ChatEngine.jsx';

function SupportWindow({ user, chat, visible }) {

    return (<>
            <div style={{...styles.supportWindow,
                            ...{opacity:visible?'1':'0'}
                        }} >
                <ChatEngine user={user} chat={chat} />
        </div>
    </>)
}

export default SupportWindow