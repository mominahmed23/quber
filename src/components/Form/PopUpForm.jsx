import { DialogContent } from '@material-ui/core'
import { DialogTitle } from '@material-ui/core'
import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
function PopUpForm(props) {
 //const [openPopup,setOpenPopup]=props; 
 const theme = useTheme();
    var AdminArray=["Growth Driver","Price Metrics","Profit Analysis","MOney Makers","Loss Makers","Sales Team Performance"];
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  function arrayMap(){
    
    return (AdminArray.map((index) => {
        <FormControlLabel
        control={
        <Checkbox
            checked={state.checkedB}
            onChange={handleChangeCheck}
            name="checkedB"
            color="#021B97"
        />
        }
    label={index}
    />
   }))
  }
  const handleClose = () => {
    setOpen(false);
  };
  const [Role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const outerTheme = createMuiTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });
  const handleChangeCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const useStyles = makeStyles((theme) => ({
    root:{
    
    },
containerdiv: {
    position:'static',
    marginLeft:'10px',
    paddingLeft:'10px',
    height:'100%'
  },
  FormHeading:{
    width:'100%',
    margin:'5px'
  },
  DashTextStyle:{
    width:'100%',
    margin:'5px',
    color:'#021B97'
  },
  GridContainerStyle:{
      background:'white',
      marginright:'10px',
      width:'100%'
  },
FormContent:{
    border:'1px solid #e1e1e1',
    background:'white',

  },
  TextFieldStyle:{
      width:'95%',
      margin: theme.spacing(1),
  },
  buttonStyle:{
      width:'90%',
      margin:'10px',
      padding:'10px',
      background:'1px solid #e1e1e1'
  },
  NextbuttonStyle:{
    width:'90%',
    margin:'10px',
    padding:'10px',
    background:'#021B97',
    color:'white'
},
bottombuttonStyle:{
    width:'46%',
    marginLeft:'0px',
    marginTop:'3px',
    marginBottom:'5px',
    marginRigh:'2px',
    padding:'5px',
    background:'1px solid #e1e1e1'
  },
  NextbuttonStyle:{
    width:'46%',
    marginLeft:'0px',
    margintTop:'5px',
    padding:'5px',
    background:'#021B97',
    color:'white'
},
TabStyle:{
    border:'1px solid #e1e1e1',
    borderRadius:'5px',
    marginLeft:'25px'
},
formControl: {
    margin: theme.spacing(1),
    minWidth: '95%',
  },
  orstyle:{
      width:'10%',
      marginLeft:'5px',
      margintop:'5px',
      marginBottom:'5px',
      marginRight:'5px',

      padding:'5px'
  }
}));

  const classes = useStyles();
    return (
        <>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Click to open Pop up
        </Button>
        <Dialog  onClose={handleClose} height={'lg'} open={open} maxWidth={'md'} fullWidth={true}>
            <DialogTitle id="responsive-dialog-title">
                <div className={classes.FormHeading}>
                    <Typography variant="h4">
                        <b>Add User</b>
                    </Typography>
                </div>
            </DialogTitle>

        <DialogContent>
            <Grid container className={classes.GridContainerStyle} spacing={2}> 
                <Grid items sm={12} className={classes.TextFieldStyle}>
                     <Typography variant="h6">
                        <b>Genrel Details</b>
                    </Typography>
                </Grid>
                 <Grid items sm={6}>
                    <TextField className={classes.TextFieldStyle} id="outlined-basic" label="First Name" variant="outlined" />
                 </Grid>
                 <Grid items sm={6}>
                    <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Last Type" variant="outlined" />
                 </Grid>
                 <Grid items sm={6}>
                    <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Contact" variant="outlined" />
                 </Grid>
                 <Grid items sm={6}>
                    <TextField className={classes.TextFieldStyle} id="outlined-basic" label="Email ID" variant="outlined" />
                 </Grid>
                 <Grid items sm={12} className={classes.TextFieldStyle}>
                     <Typography variant="h6">  
                        <b>Roles and dashboard Access</b>
                    </Typography>
                </Grid>
                <Grid items sm={6}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={Role}
                            onChange={handleChange}
                            label="Age"
                            >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>  
                </Grid>
                <Grid items sm={12} className={classes.DashTextStyle}>
                     <Typography variant="h6">  
                     <b>Dashboard Access</b>
                    </Typography>
                </Grid>
                
                <Grid items sm={12} classNAme={classes.FormHeading}>
                <Typography variant="h6">
                    Add Exception
                </Typography>
                <Switch className="switchColor"/>
                </Grid>
                

                
                <Grid items sm={12} className={classes.FormHeading}>
               
                <Typography variant="subtitle2">
                    The user will have access to the dashboard based on the role. Admin can override the access by selecting the dashboard below
                </Typography>
                </Grid>

                <Grid items sm={12}className={classes.checkBoxStyle}>
                    
               
                {/* <FormControlLabel
                //      control={ }
                //      <Checkbox
                //          checked={state.checkedB}
                //          onChange={handleChangeCheck}
                //          name="checkedB"
                //          color="#021B97"
                //      />
                //      }
                //  label={index}
                //  />
                 */}
               
                </Grid>
                <Grid items sm={12} className={classes.TextFieldStyle}>
                     <Typography variant="h6">
                        <b>Business Details</b>
                    </Typography>
                </Grid>
                <Grid items sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Select a Business Unit</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={Role}
                        onChange={handleChange}
                        label="Age"
                        >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>  
                </Grid>
                <Grid items sm={12} className={classes.TextFieldStyle}>
                     <Typography variant="h6">
                        <b>Graphical Access</b>
                    </Typography>
                </Grid>
                <Grid items sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Region</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={Role}
                        onChange={handleChange}
                        label="Age"
                        >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>  
                </Grid>

                <Grid items sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={Role}
                        onChange={handleChange}
                        label="Age"
                        >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>  
                </Grid>

                <Grid items sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Faciltity</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={Role}
                        onChange={handleChange}
                        label="Age"
                        >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>  
                </Grid>

                <Grid items sm={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Department</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={Role}
                        onChange={handleChange}
                        label="Age"
                        >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>  
                </Grid>
                <Grid container className={classes.TextFieldStyle} sm={12}>
              <Grid items sm={12}>
                <Button variant="outlined" color="primary" className={classes.bottombuttonStyle} onClick={handleClose}>
                  Cancel
                </Button> 
                <span variant="outlined" color="primary" className={classes.orstyle}>
                    --- or ---
                </span>                    
                <Button variant="outlined" color="primary" className={classes.NextbuttonStyle}>
                  Next
                </Button>
              </Grid>
            </Grid>
                </Grid>
                
                {/* </DialogContent>
             </Grid>     */}
        </DialogContent>
    </Dialog>
        </>
    )
}

export default PopUpForm
