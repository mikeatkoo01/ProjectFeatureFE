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
            <Link to='/'></Link>
            <Link to='/items'></Link>

          </nav>
       
<Routes>
 
 <Route path='/' element={<Home/>}/>
 <Route path='/items' element={<Item/>}/>


</Routes>


        </BrowserRouter>
      </div>





   

  );
}

export default App;
