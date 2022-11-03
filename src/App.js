// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


import Home from "./home-page";
import Map from "./map";
import Opportunities from "./opportunities";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route index
                               element={<Home/>}/>
                        <Route path="/map"
                               element={<Map/>}/>
                        <Route path="/opportunities"
                               element={<Opportunities/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </ChakraProvider>
    );
}
export default App;