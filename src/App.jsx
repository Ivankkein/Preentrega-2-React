import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';




 function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path={'/'} element ={<ItemListContainer />}/>
            <Route path={'/category/:id'} element ={<ItemListContainer />}> 
            </Route>
            <Route path="/category/:categoryId/:itemId" element={<ItemDetail />} />
            
      
            
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
