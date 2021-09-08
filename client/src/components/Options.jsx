import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';


import { SocketContext } from '../SocketContext';
 // Styles 
const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      display: 'flex',
      color: 'white',
      flexDirection: 'column',
      borderRadius: 20,
    },
    gridContainer: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    container: {
      width: '700px',
      margin: '15px 0',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 5,
    },
    padding: {
      padding: 10,
      
    },
    paper: {
      
      borderRadius: 20,
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      padding: 5,
      
    },

}));
  
const Options = ( { children } ) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();
    
  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        
        <form className={classes.root} noValidate autoComplete="off">
         
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              
              <Typography gutterBottom variant="h5">You</Typography>
              <TextField label="Your Name Here" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              
              <CopyToClipboard text={me} className={classes.margin}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            
            </Grid>
            
            <Grid item xs={12} md={6} className={classes.padding}>
              
              <Typography gutterBottom variant="h5">Call Now</Typography>
              <TextField label="ID of your friend" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
                  End Call
                </Button>
                 ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
                  Call
                </Button>
              )}
            
            </Grid>
          
          </Grid>
        
        </form>
        
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
