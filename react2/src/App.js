import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Persons from './components/Persons';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { NotFound } from './components/NotFound';
import CreatePerson from './components/CreatePerson';
import EditPerson from './components/EditPerson';

function App() {
  


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='persons' element={<Persons />}>
          <Route path='create' element={<CreatePerson />} />
          <Route path='edit/:personId' element={<EditPerson />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
