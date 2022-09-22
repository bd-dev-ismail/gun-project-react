
import { useState } from 'react';
import './App.css';
import AllGun from './components/allGun/AllGun';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [cart, setCart] = useState(0);
  const cartIncrase = ()=>{
    setCart(cart+ 1);
  }
  return (
    <div className="App">
      <Navbar count={cart} />
      <AllGun cartIncrase={cartIncrase} />
      <Footer/>
    </div>
  );
}

export default App;
