import React, {useContext} from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';
import { Typography } from '@material-ui/core';


const Notifications = () => {
    
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    
    return (
        <>
          {call.isReceivingCall && !callAccepted && (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Typography  variant="h4">{call.name} is calling</Typography>
              
              <Button variant="contained" color="secondary" onClick={answerCall}>
                Answer
              </Button>
           
            </div>
          )}
        </>
      );
    };

export default Notifications;