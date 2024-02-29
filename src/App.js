import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Item from './Components/Item/Item';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    

      <div>
        <BrowserRouter>

        
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/items'>Items</Link>
            <Link to='/carts'>Carts</Link>

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
