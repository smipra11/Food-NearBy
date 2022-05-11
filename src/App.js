import React ,{useState,useEffect} from 'react'
import './App.css';
import { CssBaseline,Grid } from '@mui/material';
import Header from "./components/Header/Header"
import Map from "./components/Map/Map"
import List from "./components/List/List"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getplacesData } from './api';
const theme = createTheme();

const  App =(props) =>{
  const[places,setPlaces] =useState([])
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
//console.log(places)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(()=>{
   
    getplacesData(bounds.sw,bounds.ne)
    .then((result)=>{
     // console.log(result)
     
     setPlaces(result.data.data)
    

    })


  },[coords,bounds])

  return (
   <>
   <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Header {...props}/>
    <Grid container spacing={3} style={{width:"100%"}}>
      <Grid item xs={12} md ={4}>
      <List places={places}
      childClicked={childClicked}
      
      />
      </Grid>
      <Grid item xs={12} md ={8}>
       <Map 
       setBounds={setBounds}
       setCoords={setCoords}
       coords={coords}
       places={places}
       setChildClicked={setChildClicked}
       
      />
      </Grid>

    </Grid>
   </ThemeProvider>
   </>
    
  );
}

export default App;
