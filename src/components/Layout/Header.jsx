import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { ExpandMore, Settings } from '@material-ui/icons';
import footerLogo from '../../images/__MQ_Logo_Strapline.png'

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    root: {
        display: 'flex',
      },
      whiteIcon:{
        color:theme.palette.common.white
      },
      appBar: {
          backgroundColor: theme.palette.common.white,
          color:theme.palette.common.black,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      }
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar
        position="fixed"
        className={classes.appBar}
      >
          <Toolbar>
        
          <Typography variant="h6" noWrap className={classes.title}>
          <img width="95" src={footerLogo} alt="logo" />
          </Typography>
            <div className={classes.root}>
            <IconButton
              >
                <Settings />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <div >
              <Typography variant="subtitle1" noWrap>
              Richard Smith
            </Typography>
            <Typography variant="subtitle2" noWrap>
            Richard.Smith@mondi.com
            </Typography>
              </div>
              <IconButton
              >
                <ExpandMore />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
    )
}

export default Header
