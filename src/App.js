import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Item from './Components/Item/Item';
import Cart from './Components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.png';
import logo2 from './logo2.png'
import Footer from './Home/Footer';
import SocialFlow from './Home/Socials';
import Contact from './Components/User/Contact';
import Checkout from './Components/Cart/Checkout';
import Register from './Components/LoginAuth/Register';
import InstaLive from './Components/User/InstaLive';

function App() {
  return (
    <div className="container-fluid" style={{ backgroundColor: 'green', color: '#fff', minHeight: '100vh' }}>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <div className="container">
            <Link className="navbar-brand" to='/'>
              <img src={logo2} alt="Your Logo" width="150" height="150" className="d-inline-block align-left" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='/' style={{ color: '#008631' }}><b>Home</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/items' style={{ color: '#008631', marginLeft: "10px" }}><b>Admin</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/carts' style={{ color: '#008631' }}><b>Shop</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/register' style={{ color: '#008631' }}><b>Register</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/contactus' style={{ color: '#008631' }}><b>Contact Us</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/instagram' style={{ color: '#008631' }}><b>Follow us</b></Link>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Item />} />
          <Route path='/carts' element={<Cart />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/instagram" element={<InstaLive/>}/>
        </Routes>
        
        <Footer/>
        {/* <SocialFlow/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
