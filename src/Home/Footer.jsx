import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SocialFlow from './Socials';
import footerlogo2 from '../footerlogo2.png'

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <div className="App">
            <Link className="navbar-brand" to='/'></Link>
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
                  <Link className="nav-link" to='/carts' style={{ color: '#008631' }}><b>Contact Us</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/register' style={{ color: '#008631' }}><b>Register</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/carts' style={{ color: '#008631' }}><b>Site Map</b></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/carts' style={{ color: '#008631' }}><b>Legal</b></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
        <div className="d-flex flex-column align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <a className="text-dark fs-4" href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <SocialFlow/>
            <p>Application degined by LiaMike Media Ltd</p>
            <img src={footerlogo2} alt="Your Logo" width="100" height="60" className="d-inline-block align-left" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
