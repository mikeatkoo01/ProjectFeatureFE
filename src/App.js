import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Item from './Components/Item/Item';
import Cart from './Components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    

      <div class=" container-fluid" >
        <BrowserRouter>

        
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              
            <Link class="nav-item" to='/'>Home</Link>
            <Link class="nav-item" to='/items'>Inventory</Link>
            <Link class="nav-item" to='/carts'>Orders</Link>
            </div>
          </nav>
       
<Routes>
 
 <Route path='/' element={<Home/>}/>
 <Route path='/items' element={<Item/>}/>
 <Route path='/carts' element={<Cart/>}/>


</Routes>


        </BrowserRouter>
      </div>





   

  );
}

export default App;
