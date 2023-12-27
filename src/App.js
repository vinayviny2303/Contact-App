import React from 'react'
import './App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <ToastContainer position='top-center' />
      
      <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/add' Component={AddEdit} />
      <Route exact path='/update/:id' Component={AddEdit} />
      <Route exact path='/view/:id' Component={View} />
      <Route exact path="/about" Component={About} />
      </Routes>

    </div>
  );
}

export default App;
