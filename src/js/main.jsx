import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import TodoList from './components/TodoList';
import Tittle from './components/Tittle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tittle/>
    
    <TodoList/>
  </React.StrictMode>,
)
