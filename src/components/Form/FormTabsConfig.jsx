import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from "@material-ui/core";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import PopUpForm from './PopUpForm';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { Checkbox } from '@material-ui/core';
import { FormGroup } from '@material-ui/core';



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
      },
    formControl: {
        margin: theme.spacing(3),
    },
  }
  }));
  
export default function FormTabsConfig() {    

    {/**  ------- radio buttons ------------- */}
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    {/**  ---------------- check boxes------------- */}
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    return (
    <div className={classes.root}>
      <div className={classes.FormContent}>
          <Grid container className={classes.GridContainerStyle} spacing={2}>
            
            <Grid items sm={12}>
            <FormControl component="fieldset">
                <Typography variant="subtitle1">
                Template Type
                </Typography>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel value="Standerd" control={<Radio color="primary" />} label="Standerd" />
                        <FormControlLabel value="Custom" control={<Radio color="primary" />} label="Custom" />
                        <FormControlLabel value="Others" control={<Radio color="primary" />} label="Others" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid items sm={6}>
            <Typography variant="subtitle1">
                Allowed Formats
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox
                            size="lg"
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            color="primary"
                        />
                        }
                        label="CSV"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox
                            size="lg"
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Excel"
                    />
                </FormGroup>

                <FormGroup row>
                    <FormControlLabel
                        control={
                        <Checkbox
                            size="lg"
                            checked={state.checkedC}
                            onChange={handleChange}
                            name="checkedC"
                            color="primary"
                        />
                        }
                        label="Txt"
                    />
                </FormGroup>

                <FormGroup row>
                    <FormControlLabel
                        control={
                        <Checkbox
                            size="lg"
                            checked={state.checkedD}
                            onChange={handleChange}
                            name="checkedD"
                            color="primary"
                        />
                        }
                        label="Other"
                    />
                </FormGroup>
            </Grid>
          </Grid>
      </div>
    </div>
  );
}