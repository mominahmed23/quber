import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      mainContent:{
        marginLeft: '240px',
        padding: '20px',
        marginBottom: '40px',
        flexGrow:1
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        // justifyContent: 'flex-end',
      },
  }));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <main className={classes.mainContent}>
        <div className={classes.drawerHeader} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout
