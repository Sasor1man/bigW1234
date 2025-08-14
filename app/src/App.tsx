import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Routes} from 'react-router-dom'
import Creator from './components/creator';
import Home from './components/home';


function App() {
  return (
    <Routes>
      <Route path='/form' Component={Creator}/>
      <Route path='/' Component={Home}/>
    </Routes>
  );
}

export default App;
