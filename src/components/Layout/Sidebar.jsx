import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import {  List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const drawerWidth = 240;

const Sidebar = () => {
    const theme = useTheme();
    const SidebarStyles = {
        width: drawerWidth,
        backgroundColor:theme.palette.primary.main,
        color: theme.palette.common.white,
        top: '64px',
        left:0,
        right: 'auto',
        flex: '1 0 auto',
        flexShrink: 0,
        height: '100%',
        display: 'flex',
        outline: 0,
        zIndex: 1200,
        position: 'fixed',
        overflowY: 'auto',
        flexDirection: 'column',
      };
      const whiteIconStyle = {
        color:theme.palette.common.white
      };
    return (
        <aside style={SidebarStyles}>
              <div>
          <IconButton>
          <KeyboardBackspaceIcon style={whiteIconStyle} />
          </IconButton>
        </div>
    
        <List>
          {['User Profile', 'Roles and Privileges', 'Reference Data Management'].map((text) => (
            <ListItem button key={text}>  
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </aside>
    )
}

export default Sidebar
