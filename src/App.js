import React,{useState} from 'react';

import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import GlobalStyle from './globalStyles';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

  return (
    <Router>
      <GlobalStyle/>
      <div className="App">
        <Sidebar 
          isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Switch>
        <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
