import React from 'react';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import './type.css'; // Google Fonts are loaded from the type.css

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
      image: {
        marginLeft: '15px',
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },
      typography: {
          color: 'white',
          margin: '30px 100px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Lobster', // Google Font
          background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
}));

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            
                <Typography className={classes.typography} variant="h2" align="center">Kire Chat</Typography>
            
            <VideoPlayer/>
            
            <Options>
                <Notifications/>
            </Options>
        </div>
    );
}

export default App;