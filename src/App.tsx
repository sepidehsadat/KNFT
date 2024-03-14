import React from 'react';
import KSRouter from "./KSRouter";
// import { Route } from "react-router-dom";


import './App.css';
// import CoursePage from './pages/CoursePage';
import Login from './pages/LoginPage';

function App()
{
  return (
    <div className="App">
      <KSRouter/>
      {/* <Route path="/*" exact component={KSRouter} /> */}
    </div>
  );
}

export default App;
