import React,{useState} from "react";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import {
    CircularProgress,
    Grid,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();



const List = ({places}) => {
    const classes = useStyles();
    const [type,setType] = useState('restaurants')
    const [rating,setRating] = useState('0')
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.container}>
            <Typography variant="h4">Food & Dining around you</Typography>

            <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" className={classes.marginTop} value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating" >Rating</InputLabel>
            <Select id="rating" className={classes.marginTop}value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="0">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
           
           {places?.map((place,index)=>
             (
               <Grid item key={index} xs ={12}>
                 <PlaceDetails place={place}/>
                 </Grid>

             )

           )}
          </Grid>
        </div>
        </ThemeProvider>
    );
};
export default List;
