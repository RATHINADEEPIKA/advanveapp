import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { lazy } from 'react';

import LazyLayout from './Components/LazyLayout';
const LazyWelcome =lazy(()=>import('./Components/Welcome'));
const LazyLogin = lazy(()=>import('./Components/Login'));
const LazyAhome = lazy(()=>import  ('./Components/Ahome'));
const LazyMain= lazy(()=>import   ('./Components/Main'));
const LazyUhome = lazy(()=>import   ('./Components/Uhome'));
const LazyPostserv = lazy(()=>import  ('./Components/Postserv'));
const LazyEditserv= lazy(()=>import   ('./Components/Editserv'));
const LazyDeleteserv = lazy(()=>import   ('./Components/Deleteserv'));
const LazyViewserv = lazy(()=>import   ('./Components/Viewserv'));
const LazyViewbook= lazy(()=>import   ('./Components/Viewbook'));
//import  Changestat  from './Components/Changestat';
//const LazyViewpay = lazy(()=>import   ('./Components/Viewpay'));
const LazyBookserv= lazy(()=>import  ('./Components/Bookserv'));
const LazyEditbook = lazy(()=>import   ('./Components/Editbook'));
const LazyDeletebook = lazy(()=>import   ('./Components/Deletebook'));
const LazyViewquery = lazy(()=>import   ('./Components/Viewquery'));
const LazyChat= lazy(()=>import ('./Components/Chat'));
const LazyCalender= lazy(()=>import ('./Components/Calender'));
const LazyPayment= lazy(()=>import ('./Components/Payment'));


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to ="/main"/>} /> 
          <Route path="/main" element={<LazyLayout component={LazyMain}/>} /> 
          <Route path="welcome" element={<LazyLayout component={LazyWelcome}/>} /> 
          <Route path="/login" element={<LazyLayout component={LazyLogin}/>} />
          <Route path="/ahome" element={<LazyLayout component={LazyAhome}/>} />
          <Route path="/uhome" element={<LazyLayout component={LazyUhome}/>} />
          <Route path="/postserv" element={<LazyLayout component={LazyPostserv}/>} />
          <Route path="/editserv" element={<LazyLayout component={LazyEditserv}/>} />
          <Route path="/deleteserv" element={<LazyLayout component={LazyDeleteserv}/>} />
          <Route path="/viewserv" element={<LazyLayout component={LazyViewserv}/>} />
          <Route path="/viewbook" element={<LazyLayout component={LazyViewbook}/>} />
         
          <Route path="/bookserv" element={<LazyLayout component={LazyBookserv}/>} />
          <Route path="/Editbook" element={<LazyLayout component={LazyEditbook}/>} />
          <Route path="/Deletebook" element={<LazyLayout component={LazyDeletebook}/>} />
          <Route path="/Viewquery" element={<LazyLayout component={LazyViewquery}/>} />
          <Route path="/chat" element={<LazyLayout component={LazyChat}/>} />
          <Route path="/calender" element={<LazyLayout component={LazyCalender}/>} />
          <Route path="/payment" element={<LazyLayout component={LazyPayment}/>} />
          {/* <Route path="/chat" element={<Chat/>} /> */}

        </Routes>
      </Router>
    </div>
  );
};

export default App;