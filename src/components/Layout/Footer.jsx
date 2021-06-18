import React from 'react'
import footerLogo from '../../images/__MQ_Logo_Strapline.png'

const drawerWidth = 240;

const Footer = () => {
    const footerStyles = {
        width: `calc(100% - ${drawerWidth}px)`,
        bottom: 0,
        left:'auto',
        right: 0,
        outline: 0,
        zIndex: 1200,
        position: 'fixed',
        textAlign: 'center',
        padding: '8px 0px'
      };
    return (
        <footer className="MuiPaper-elevation4" style={footerStyles}>
            <img width="75" src={footerLogo} alt="logo" />
        </footer>
    )
}

export default Footer

