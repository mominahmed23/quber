import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { CssBaseline, Drawer, List, ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { ExpandMore, Settings } from '@material-ui/icons';

const drawerWidth = 240;


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
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor:theme.palette.primary.main,
        color: theme.palette.common.white,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        // justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
  }));

const Layout = ({children}) => {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
          <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            QUBER
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
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
          <KeyboardBackspaceIcon className={classes.whiteIcon} />
          </IconButton>
        </div>
    
        <List>
          {['User Profile', 'Roles and Privileges', 'Reference Data Management'].map((text, index) => (
            <ListItem button key={text}>  
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
     
      </div>
         

    );
}

export default Layout
