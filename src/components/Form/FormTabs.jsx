import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from "@material-ui/core";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import PopUpForm from './PopUpForm';
import FormTabsConfig from './FormTabsConfig';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function FormTabs() {
    
    const [value, setValue] = React.useState(0);
    const [openPopup,setOpenPopoup]=useState(false);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const overrides = {
      MuiTab: {
        // general overrides for your material tab component here
        root: {
          backgroundColor: 'red',
          '&$selected': {
            backgroundColor: 'blue',
          }
        },
      },
    };  
const useStyles = makeStyles((theme) => ({
  
  root:{
    
    },
containerdiv: {
    position:'static',
    marginLeft:'10px',
    paddingLeft:'10px',

  },
  FormHeading:{
    width:'100%',
    margin:'5px'
  },
  GridContainerStyle:{
      background:'white',
      marginright:'0px',
      width:'78%'
  },
FormContent:{
    border:'1px solid #e1e1e1',
    background:'white',

  },
  TextFieldStyle:{
      width:'90%',
      margin:'10px',
  },
  addresfeild:{
    margin:'10px',
    width:'95%',
  },
  buttonStyle:{
      width:'42%',
      margin:'10px',
      padding:'10px',
      background:'1px solid #e1e1e1'
  },
  bottombuttonStyle:{
    width:'40%',
    marginLeft:'0px',
    margintop:'0px',
    marginBottom:'0px',
    padding:'5px',
    background:'1px solid #e1e1e1'
  },
  NextbuttonStyle:{
    width:'40%',
    marginLeft:'20px',
    padding:'5px',
    background:'#021B97',
    color:'white'
},
TabStyle:{
    border:'1px solid #e1e1e1',
    borderRadius:'5px',
    marginLeft:'25px',
    '&$selected': {
      backgroundColor: 'blue',
    }
}
}));
const classes = useStyles();
return (
    
    <div className={classes.root}>
      <div style={overrides}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
         <Tab label="Client info" {...a11yProps(0)} className={classes.TabStyle}/>
         <Tab label="Configuration" {...a11yProps(1)} className={classes.TabStyle}/>
         <Tab label="Template/ pop up form" {...a11yProps(2)} className={classes.TabStyle}/>
        </Tabs>
      </div>
      <div className={classes.FormContent}>
        <TabPanel value={value} index={0}>
          <Grid container className={classes.GridContainerStyle} spacing={2}>
            <Grid items sm={12} className={classes.TextFieldStyle}>
              <Typography variant="h6">
                <b>Genrel Details</b>
                </Typography>
            </Grid>
            
            <Grid items sm={6}>
              <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Tenant Name" variant="outlined" />
            </Grid>
            <Grid items sm={6}>
              <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Business Type" variant="outlined" />
            </Grid>
            <Grid items sm={12}>
              <Typography variant="subtitle2" className={classes.TextFieldStyle}>
                is it a Multi-Factory?
              </Typography>
            </Grid>
            <Grid items sm={6}>
              <Button variant="outlined" color="primary" className={classes.buttonStyle}>
                Yes
              </Button>                    
              <Button variant="outlined" color="primary" className={classes.buttonStyle}>
                No
              </Button>
            </Grid>
            <Grid items sm={12}>
              <Typography variant="h6" className={classes.TextFieldStyle}>
                  <b>Location Details</b>
              </Typography>
            </Grid>
            <Grid items sm={6}>
              <TextField className={classes.TextFieldStyle} id="outlined-basic" label="City" variant="outlined" />
            </Grid>
            <Grid items sm={6}>
              <TextField className={classes.TextFieldStyle} id="outlined-basic" label="State" variant="outlined" />
            </Grid>
            <Grid items sm={12}>
              <TextField className={classes.addresfeild} id="outlined-basic" label="Address" variant="outlined" />
            </Grid>
            <Grid items sm={6}>
              <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Zip" variant="outlined" />
            </Grid>
            
            <Grid container className={classes.TextFieldStyle} sm={6}>
              <Grid items sm={12}>
                <Button variant="outlined" color="primary" className={classes.bottombuttonStyle}>
                  Cancel
                </Button>                    
                <Button variant="outlined" color="primary" className={classes.NextbuttonStyle}>
                  Next
                </Button>
              </Grid>
            </Grid>




          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Grid items sm={12} className={classes.TextFieldStyle}>
          <FormTabsConfig/>
          </Grid>
          </TabPanel>

          <TabPanel value={value} index={2}>
        <Grid items sm={12} className={classes.TextFieldStyle}>
  
            <PopUpForm/>
          </Grid>
          </TabPanel>
      </div>
    </div>
  );
}