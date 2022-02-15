import React from 'react'
import { ChatEngine } from 'react-chat-engine';


function AdminSupport() {
    return (
        <ChatEngine 
          projectID={process.env.REACT_APP_CE_PROJECT_ID}
          userName='Support-ART'
          userSecret='12354'
          height='calc(100vh - 12px)'
        />
      );
}

export default AdminSupport