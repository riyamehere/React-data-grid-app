import { Box } from '@mui/material';
import './App.css'
import DataGridHomePage from './components/DataGridHomePage/DataGridHomePage.component';

const App = () => {
  return (
    <Box className="parentBox">
    <Box className="childBox">
      <DataGridHomePage />
    </Box>
  </Box>
  
  )
}

export default App;
