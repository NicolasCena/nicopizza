import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { Login } from '../components/Login';

export const Navigation = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/Login" element={<Login />} />
    </Routes>
  )
}
