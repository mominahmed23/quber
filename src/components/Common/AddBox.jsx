import React from "react";
import { InputBase, makeStyles, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    border: `2px solid #CDCDCD66`,
    padding: "20px 5px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  customInput: {
    marginLeft: "10px",
    border: "2px solid #70707033",
    borderRadius: "5px",
    padding: "4px 8px",
    minWidth: 400,
  },
  customButton: {
    backgroundColor: "#CDCDCD",
    borderRadius: "5px",
    border: "none",
    color: "white",
    padding: "6px 12px",
  },
}));

const AddBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="subtitle2">Region</Typography>
      <InputBase
        placeholder="Add a region here"
        className={classes.customInput}
        endAdornment={<button className={classes.customButton}>Add</button>}
      />
    </div>
  );
};

export default AddBox;
