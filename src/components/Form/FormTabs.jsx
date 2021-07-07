import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from "@material-ui/core";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import PopUpForm from './PopUpForm';
import FormTabsConfig from './FormTabsConfig';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';



const schema=yup.object().shape({
  tanentName:yup.string().required(),
  businessType:yup.string().required(),
  city:yup.string().required(),
  state:yup.string().required(),
  address:yup.string().required(),
  zipCode:yup.string().required()
});
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
      background:'1px solid #e1e1e1',
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
    color:'white',
    '&:hover':{
      background:'white',
      color:'#021b97',
      TransitionEvent:'1'
    }
},
TabStyle:{
    border:'1px solid #e1e1e1',
    borderRadius:'5px',
    marginLeft:'25px',
    backgroundColor: 'blue',
    '&hover':{
      background:'red'
    },
    },
tabHead:{
  background:'red'
}
}));

const classes = useStyles();
const [records,setRecords]=useState([]);
const [UserRegistration, setUserRegistration] = useState({
  tanentName:"",
  businessType:"",
  city:"",
  state:"",
  address:"",
  zipCode:"",
  multiFactoryStatus:"",
 

});
const handleInput=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  console.log(name,event.target.value);
   setUserRegistration({...UserRegistration,[name]:value});
   console.log(UserRegistration);
  
};
// const handlebuttonChange=()=>{

//   console.log("Clicked");

// };
const handleSubmitForm=(event)=>{
  event.preventDefault();
  const newRecord={...UserRegistration};
  setRecords([...records,newRecord]);
  console.log(records);
};
  const {register,handleSubmit,formState: {errors}}=useForm({
    resolver:yupResolver(schema)
  });
  const onSubmit=(data)=>{
    console.log(data);
  };
return (
    
    <div className={classes.root}>
      <div style={overrides}>
        <Tabs value={value} onChange={handleChange} aria-label="Simple tTbs Example">
         <Tab label="Client info" {...a11yProps(0)} className={classes.TabStyle}/>
         <Tab active label="Configuration" {...a11yProps(1)} className={classes.TabStyle}/>
         <Tab label="Template / Pop up form" {...a11yProps(2)} className={classes.TabStyle}/>
        </Tabs>
      </div>
      <div className={classes.FormContent}>
        <TabPanel value={value} index={0}>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Grid container className={classes.GridContainerStyle} spacing={2}>
            <Grid items sm={12} className={classes.TextFieldStyle}>
              <Typography variant="h6">
                  <b>Genrel Details</b>
                </Typography>
            </Grid>
            
            <Grid items sm={6}>
              <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Tanent Name" variant="outlined" onChange={handleInput} value={UserRegistration.tanentName} {...register("tanentName",{required:"Name is required"})}/>
              <p>{errors.tanentName?.message}</p>
            </Grid>
            <Grid items sm={6}>
              <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Business Type" variant="outlined" onChange={handleInput} value={UserRegistration.businessType} {...register("businessType",{required:"Name is required"})}/>
            <p>{errors.businessType?.message}</p>
            </Grid>
            {/* <Grid items sm={12}>
              <Typography variant="subtitle2" className={classes.TextFieldStyle}>
                is it a Multi-Factory?
              </Typography>
            </Grid> */}
            <Grid items sm={6}>
            <FormControl component="fieldset">
                <Typography variant="h6" className={classes.TextFieldStyle}>
                is it a multi-factory
                </Typography>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top" className={classes.TextFieldStyle} onChange={handleInput} name="multiFactoryStatus" {...register("businessType",{required:"Name is required"})}> 
                        <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                    </RadioGroup>
                </FormControl>
                <p>{errors.multiFactoryStatus?.message}</p>
              {/* <Button variant="outlined" color="primary" className={classes.buttonStyle} onClick={handlebuttonChange}>
                Yes
              </Button>  
                              
              <Button variant="outlined" color="primary" className={classes.buttonStyle} onClick={handlebuttonChange}>
                No
              </Button> */}
          
            </Grid>
            <Grid items sm={12}>
              <Typography variant="h6" className={classes.TextFieldStyle}>
                  <b>Location Details</b>
              </Typography>
            </Grid>
            <Grid items sm={6}>
              <TextField className={classes.TextFieldStyle} id="outlined-basic" label="City" variant="outlined" onChange={handleInput} value={UserRegistration.city} name="city" />
              <p>{errors.city?.message}</p>
            </Grid>
            <Grid items sm={6}>
              <TextField className={classes.TextFieldStyle} id="outlined-basic" label="State" variant="outlined" onChange={handleInput} value={UserRegistration.state} name="state" />
              <p>{errors.state?.message}</p>
            </Grid>
            <Grid items sm={12}>
              <TextField className={classes.addresfeild} id="outlined-basic" label="Address" variant="outlined" onChange={handleInput} value={UserRegistration.address} name="address"/>
              <p>{errors.address?.message}</p>
            </Grid>
            <Grid items sm={6}>
              <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Zip" variant="outlined" onChange={handleInput} value={UserRegistration.zipCode} name="zipCode"/>
              <p>{errors.zipCode?.message}</p>
            </Grid>
            
            <Grid container className={classes.TextFieldStyle} sm={6}>
              <Grid items sm={12}>
                <Button variant="outlined" color="primary" className={classes.bottombuttonStyle}>
                  Cancel
                </Button>                    
                <Button type="submit" variant="outlined" color="primary" className={classes.NextbuttonStyle}>
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
          </form>
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