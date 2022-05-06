import {makeStyles} from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default makeStyles((theme) => ({
  formControl: {
    margin: '30px', minWidth: 120, marginBottom: '30px',marginTop:"20px"
  },
  selectEmpty: {
    marginTop: '20px',
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
    
  },
  marginBottom: {
    marginBottom: '30px',
  },
  marginTop:{
      marginTop:"10px"
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));