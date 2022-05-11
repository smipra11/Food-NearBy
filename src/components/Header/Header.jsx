import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar,Toolbar } from '@mui/material'
import { Typography,InputBase,Box } from '@mui/material'
//import Box from '@mui/material/box'
import SearchIcon from '@mui/icons-material/Search'
import useStyles from "./styles"
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const Header =() =>{
    const classes = useStyles();
    return(
       <>
       <ThemeProvider theme={theme}>
    <AppBar position ="static">
        <Toolbar className="classes.toolbar">
            <Typography variant='h5' className="classes.title">
            Travel Advisior          
            </Typography>
           
           
           
               
           
           
        </Toolbar>


    </AppBar>
    </ThemeProvider>
   </>
    )
}
export default Header
