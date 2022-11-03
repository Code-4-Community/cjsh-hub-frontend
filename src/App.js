import Home from './containers/home-page';
import Map from './components/map';
import Opportunities from './containers/opportunities';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <BrowserRouter>
        <Box>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/map' element={<Map />} />
            <Route path='/opportunities' element={<Opportunities />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
