// routes
import Router from "./routes";
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';
import   { auth, initializeAppp, user } from "./data/firebase";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
  



function App() {

  initializeAppp()


  return (
    <BrowserRouter>
    <ThemeProvider>
      <ThemeSettings>
        {" "}
        <Router />{" "}
      </ThemeSettings>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
