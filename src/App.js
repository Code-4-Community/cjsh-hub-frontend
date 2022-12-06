import Home from './containers/home-page';
import Map from './components/map';
import Opportunities from './containers/opportunities';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/navbar';

import { extendTheme } from '@chakra-ui/react';
import { ROUTES } from './constants';
import theme from './theme';

const extendedTheme = extendTheme(theme);

function App() {
  return (
    <ChakraProvider theme={extendedTheme}>
      <BrowserRouter>
        <Navbar />
        <Box>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path={ROUTES.MAP}
              element={<Map height='calc(100vh - 4.25rem)' />}
            />
            <Route path='/opportunities' element={<Opportunities />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
