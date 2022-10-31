import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';

export const Navigation = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/Login" element={<Login />} />
    </Routes>
  )
}
