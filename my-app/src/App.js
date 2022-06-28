import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Home from './Pages/home';
import Cart from './Pages/cart';
import Login from './Pages/login';

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = Home
      break
    case "/Cart":
      Component = Cart
      break
    case "/Login":
      Component = Login
      break
  };
  return (
    
    <div className="App">
      
      <Navbar></Navbar>
      <Component></Component>
      
    </div>
  );
}

export default App;
