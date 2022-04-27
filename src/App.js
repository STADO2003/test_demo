//import lo
import './App.css';
import Aboutus from './components/Aboutus';
import Homelist from './components/Homelist';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Services from './components/Services';
import Signup from './components/Signup';
import Groceries from './components/Groceries';
import Grocerypro from './components/Grocerypro';
import MyForm from './components/MyForm';

import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Vegetables from './components/Vegetables';
import Milk from './components/Milk';


function App() {
  
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
    
      <Route path="/About">
      <Aboutus/>
      </Route>
      <Route path="/Services">
      <Services/>
      </Route>
      <Route path="/User/Login">
      <Login/>
      </Route>
      <Route path="/User/Signup">
      <Signup/>
      </Route>
      
      <Route path="/gdelivery">
      <Groceries/>
      </Route>
      <Route path="/Grocerypro">
      <Grocerypro/>
      </Route>
      <Route path="/Vegetables">
      <Vegetables/>
      </Route>
      <Route path="/Milk">
      <Milk/>
      </Route>
      <Route path="/">
        <Homelist/>
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;

