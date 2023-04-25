import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import loginPage from './pages/loginPage';
import Button from 'react-bootstrap/Button';
import Card from './components/Card';
import Carousel from './components/Carousel';


export function App() {
  return (
    
  <>
  <h1>Motorcycles</h1>
  <NavBar/>
  <Carousel/>
  <Card/>
  
  </>

  );
}

export default App;
