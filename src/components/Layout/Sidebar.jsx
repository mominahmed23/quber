import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { IconButton, makeStyles } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { NavLink } from "react-router-dom";
import { navigation } from "../../utils/navigation";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    backgroundColor: theme.palette.background.default,
    padding: "75px 5px 25px 5px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  navLink: {
    textDecoration: "none",
    padding: "4px 8px",
    margin: "5px 0px",
    color: theme.palette.background.paper,
  },
  selected: {
    backgroundColor: theme.palette.text.disabled,
    color: theme.palette.background.default,
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const SidebarStyles = {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    top: "64px",
    left: 0,
    right: "auto",
    flex: "1 0 auto",
    flexShrink: 0,
    height: "100%",
    display: "flex",
    outline: 0,
    zIndex: 1200,
    position: "fixed",
    overflowY: "auto",
    flexDirection: "column",
  };
  const whiteIconStyle = {
    color: theme.palette.common.white,
  };
  return (
    <aside style={SidebarStyles}>
      <div>
        <IconButton>
          <KeyboardBackspaceIcon style={whiteIconStyle} />
        </IconButton>
      </div>

      {navigation.map((item) => (
        <NavLink
          key={item.label}
          exact
          activeClassName={classes.selected}
          className={classes.navLink}
          to={item.path}
        >
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
