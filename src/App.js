import Home from './home-page';
import Map from './map';
import Opportunities from './opportunities';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/opportunities" element={<Opportunities />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
