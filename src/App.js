import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Item from './Components/Item/Item';

function App() {
  return (
    <div>

      <div>
        <BrowserRouter>

        <header>
          <nav>
            <Link to='/'></Link>
            <Link to='/items'></Link>

          </nav>
        </header>
<Routes>
 
 <Route path='/' element={<Home/>}></Route>
 <Route path='/items' element={<Item/>}></Route>


</Routes>


        </BrowserRouter>
      </div>





    </div>

  );
}

export default App;
