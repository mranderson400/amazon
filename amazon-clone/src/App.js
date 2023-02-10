import './App.css';
import Header  from './Header';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    // BEM 
    <div className="app">
    <Routes>
      
    
    
    <Route path='/' element={<><Header/> <Home/></>}></Route>
    <Route path='/checkout' element={<>    <Header/>  <Checkout/></>}></Route>

     {/* <Header/>
     <Home/> */}
    </Routes>
    </div>

  );
}

export default App;
