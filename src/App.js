import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ServicesScreen from './Screens/ServicesScreen';
import AboutScreen from './Screens/AboutScreen';
import React from 'react';
import MetaMaskConnector from './Screens/MetaMaskConnector';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home"/>}/>
            <Route exact path="/home" element={<HomeScreen/>} />
            <Route exact path="/about" element={<AboutScreen/>}/>
            <Route exact path="/services" element={<ServicesScreen/>}/>
            <Route exact path="/metamask" element={<MetaMaskConnector/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;