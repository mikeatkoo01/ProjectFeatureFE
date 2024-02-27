import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <div>

      <div>
        <BrowserRouter>

        <header>
          <nav>
            <Link to='/'></Link>

          </nav>
        </header>
<Routes>
 
 <Route path='/' element={<Home/>}></Route>


</Routes>


        </BrowserRouter>
      </div>





    </div>

  );
}

export default App;
