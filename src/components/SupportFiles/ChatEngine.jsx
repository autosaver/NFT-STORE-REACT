import React from 'react';
import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine';

const styles = {
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    }
}
function ChatEngine({ user, chat }) {
    
    return (
        <div style={{...styles.chatEngineWindow}}>
            <ChatEngineWrapper style={{paddingBottom:'50px'}}>
                <Socket
                    projectID={process.env.REACT_APP_CE_PROJECT_ID}
                    userName={user.email}
                    userSecret={user.email}
                />
                <ChatFeed activeChat={chat?.id }/>
            </ChatEngineWrapper>
        </div>

    )
}

export default ChatEngine