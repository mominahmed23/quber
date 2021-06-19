import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import { green } from '@material-ui/core/colors';
import { InputBase, Link } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
  warp:{
    marginBottom:'30px'
  },
  searchBar:{
      border:'1px solid #c9c9c9',
      borderRadius:'5px',
      padding:'2px 8px',
      minWidth:'300px'

  },
  titleWrap:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:'20px'
  }
});
const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: green[500],
      },
    },
  });
const rows = [
    {
        name:"1",
        user:"1",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
    {
        name:"2",
        user:"1",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
    {
        name:"3",
        user:"1",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
    {
        name:"4",
        user:"1",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
    {
        name:"5",
        user:"1",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
    {
        name:"6",
        user:"1",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
];
export default function Exceptions() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.titleWrap}>
        <div>
          <Typography variant="h5">Exceptions</Typography>
          <Typography variant="paragraph">
            Note: In order to edit User's individual privileges, please click on
            the user
          </Typography>
        </div>
        <div>
          <InputBase
            endAdornment={<SearchIcon />}
            className={classes.searchBar}
            placeholder="Find a user here"
          />
        </div>
      </div>

      <TableContainer className={classes.wrap} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>User</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="right">Growth Drives</TableCell>
              <TableCell align="right">Price Metrics</TableCell>
              <TableCell align="right">Profit Analytics</TableCell>
              <TableCell align="right">Money Makers</TableCell>
              <TableCell align="right">Loss Makers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
            <TableCell style={{borderBottom:"none"}}>
              <Link href="#" onClick={(e) => e.preventDefault()}>
                +Add User
              </Link>
            </TableCell>
            </TableRow>
            {rows.map((row) => (
              <TableRow key={row.name}>
                 <TableCell component="th" scope="row">
                  {row.user}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <ThemeProvider theme={outerTheme}>
                  <TableCell align="right">
                    <Switch className="switchColor" />
                  </TableCell>
                  <TableCell align="right">
                    <Switch />
                  </TableCell>
                  <TableCell align="right">
                    <Switch />
                  </TableCell>
                  <TableCell align="right">
                    <Switch />
                  </TableCell>
                  <TableCell align="right">
                    <Switch />
                  </TableCell>
                </ThemeProvider>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}