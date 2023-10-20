import React from 'react';
import HomePage from './Components/HomePage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import StudentReg from './Components/StudentReg/StudentReg';
import StudentLogin from './Components/StudentLogin/StudentLogin';
import Institute from './Components/Institute/Institute';
import StudentRecord from './Components/StudentRecord/StudentRecord';
import Allrecords from './Components/Allrecords.js/Allrecords';
import Course from './Components/Institute/Course/Course';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='Login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='StudentReg' element={<StudentReg/>}/>
        <Route path='StudentLogin' element={<StudentLogin/>}/>
        <Route path='Institute' element={<Institute/>}/>
        <Route path='StudentRecord' element={<StudentRecord/>}/>
        <Route path='Allrecords' element={<Allrecords/>}/>
        <Route path='Course' element={<Course/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
