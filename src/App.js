import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import CartPage from './pages/cart'
const App = () => {
  let status =localStorage.getItem("isLogedIn")
  return (
    // <HomePage/>
    // <LoginPage/>
    // <CartPage/>
    <Router>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/login.html'>
          <LoginPage />
        </Route>
        {status == "true" && <Route path='/index.html'>
          <HomePage/>
        </Route>}
        {status == "true" && <Route path='/cart.html'>
          <CartPage itemList='{"name":"John", "age":30, "car":null}'/>
        </Route>}
      </Switch>
    </Router>
  );
}

export default App;
