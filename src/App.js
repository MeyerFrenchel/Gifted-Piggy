import React,{useState} from 'react';



import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import GlobalStyle from './globalStyles';
import './App.css';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop/Shop';
import WishlistPage from './pages/WishlistPage';
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
        <Route path="/shop" component={Shop}/>
        <Route path="/wishlist" component={WishlistPage}/>
        </Switch>
        <Footer/>
        </div>
    </Router>    
  );
}

export default App;
