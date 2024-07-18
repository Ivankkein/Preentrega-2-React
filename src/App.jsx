import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Productos from './productos';



 function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path={'/'} element ={<Productos />}/>
            <Route path={'/category/:id'} element ={<Productos />}>
      
      </Route>
      </Routes>
      </BrowserRouter>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;