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
import { Link } from '@material-ui/core';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  wrap:{
    marginBottom:'30px'
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
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
    {
        name:"2",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
    {
        name:"3",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
    {
        name:"4",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
    {
        name:"5",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
    {
        name:"6",
        key1:1,
        key2:2,
        key3:3,
        key4:4,
        key5:5,
    },
];
export default function RolesAndPrivileges() {
  const classes = useStyles();
  return (
    <>
    <Typography variant="h5">Roles and Privileges</Typography>
    <TableContainer className={classes.wrap} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell align="right">Growth Drives</TableCell>
            <TableCell align="right">Price Metrics</TableCell>
            <TableCell align="right">Profit Analytics</TableCell>
            <TableCell align="right">Money Makers</TableCell>
            <TableCell align="right">Loss Makers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <div className="test">
            <Link href="#" onClick={e=>e.preventDefault()}>
   +Add Role
  </Link>
            </div>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <ThemeProvider theme={outerTheme}>
                <TableCell align="right"><Switch className="switchColor"/></TableCell>
                <TableCell align="right"><Switch/></TableCell>
                <TableCell align="right"><Switch/></TableCell>
                <TableCell align="right"><Switch/></TableCell>
                <TableCell align="right"><Switch/></TableCell>
              </ThemeProvider>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}