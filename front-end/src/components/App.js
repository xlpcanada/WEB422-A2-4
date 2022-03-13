import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from '../pages/HomePage';
import AboutPage from "../pages/AboutPage"
import PropertyListingPage from "../pages/PropertyListingPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import PropertyDescriptionPage from "../pages/PropertyDescriptionPage"

import '../assets/css/App.css';
import '../assets/css/utilities.css';


const App = () => 
{
  return (
      <BrowserRouter>

          <Routes>

            <Route path="/" element={<HomePage  />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="resorts" element={<PropertyListingPage  />} />
            <Route path="resorts/:type" element={<PropertyListingPage  />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="resortsDes/:id" element={<PropertyDescriptionPage />} />


          </Routes>
      
      </BrowserRouter>
    );
};

export default App;

