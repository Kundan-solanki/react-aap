import  {BrowserRouter, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './allget/Navbar';
import Role from './allget/Role';
import Addrole from './allget/Addrole';
import Home from './allget/Home';
import Student from './allget/Student';
import Addstudent from './allget/Addstudent';
import Marksheet from "./allget/Marksheet";
import Addmarksheet from "./allget/Addmarksheet";
import Login from "./allget/Login";
import { useEffect } from "react";

// useEffect(()=>{
//   if(auth === null)
//     navigator('/login')
// })

function App() {
  return ( 
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/role' element={<Role/>}></Route>
    <Route path='/addrole' element={<Addrole/>}></Route>
    <Route path='/addrole/:id' element={<Addrole/>}></Route>
    <Route path='/student' element={<Student/>}></Route>
    <Route path='/addstudent' element={<Addstudent/>}></Route>
    <Route path='/addstudent/:id' element={<Addstudent/>}></Route>
    <Route path='/marksheet' element={<Marksheet/>}></Route>
    <Route path='/addmarksheet' element={<Addmarksheet/>}></Route>
    <Route path='/addmarksheet/:id' element={<Addmarksheet/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    </Routes>

    </BrowserRouter>
   </>
  );
}

export default App;
