import React from 'react';
import {
  ChakraProvider, theme,
} from '@chakra-ui/react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import WatchPage from './Components/WatchPage';
import SearchResultPage from './Components/SearchResultPage';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <Header/>
      
      <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/watch' element={<WatchPage/>}/>
          <Route path='/results' element = {<SearchResultPage/>}/>
      
        </Routes>
      </Router>
     
    </ChakraProvider>
  );
}

export default App;
