import { Typography } from '@material-ui/core';
import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60ch',
        }
    },
    containerDiv: {
        display: "flex",
        flexDirection: "row",
        border: '1px solid #e1e1e1',
        borderRadius: '10px',
        padding: '20px',
        alignContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    seaBox: {
        display: 'flex',
        border: '1px solid #e1e1e1',
        borderRadius: '10px',
    },
    AddButton: {
        height: '55px',
        marginTop: '8px',
        width: '50px'
    },
    cardArea: {
        display: 'flex',
        marginLeft: '30px',
        padding: '20px 40px 20px 20px',
        marginBottom: '40px',
        flexGrow: 1
    },
    cardConetent: {
        width: '320px',
        background: 'white',
        height: '320px',
        padding: '20px 40px 20px 20px',
    },
    cardHeading: {
        color: "#084F92",
        fontSize: '30px',
        width: '20px',
    }
}));
export default function SearchArea() {
    var cityArray = ["Germany", "bavaria", "Berlin", "Hessen"];
    const classes = useStyles();
    return (
        <>
            <div className={classes.containerDiv}>
                <Typography variant="h6" >
                    Region
                </Typography>
                <div className={classes.seaBox}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Add a Region Here" variant="outlined" />
                    </form>
                    <Button variant="contained" className={classes.AddButton}>
                        ADD
                    </Button>
                </div>
            </div>

            {/*------------ card area starts here ---------------------*/}

            <div className={classes.cardArea}>
                <div className={classes.cardConetent}>
                    <div className>
                        <Typography variant="subtitle1" className={classes.cardHeadingText}>
                            EMEA
                        </Typography>
                        <KeyboardArrowUpIcon />
                    </div>
                    {cityArray.map((item) => (
                        <div>{item} <DeleteIcon style={{ color: 'red' }} />
                        </div>
                    ))}

                </div>
                <div className={classes.cardActionIcon}>
                    <div>
                        <EditIcon />
                    </div>
                    <DeleteIcon style={{ color: 'red' }} />
                </div>
            </div>
        </>
    )
}

