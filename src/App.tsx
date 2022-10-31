import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Navigation } from './router/Navigation';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
      </BrowserRouter>
    </>
  );
}

export default App;
