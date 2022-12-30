import './App.css';
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Brief from "./components/Brief";
import Error from "./components/Error";

function App() {
  return (
    <>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<Brief/>}/>
        <Route path='*' element={<Error/>}/>
        </Routes>
    </>
  );
}

export default App;
