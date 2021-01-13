import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import AppBar from './components/AppBar'
import Inicio from './components/Inicio';
import Bla from './components/Bla';
import Parametros from './components/Parametros';
import User from './components/User';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">Inicio</Link>&nbsp;&nbsp;
          <Link to="/bla" className="btn btn-dark">Bla bla bla</Link>&nbsp;&nbsp;
          <NavLink to="/users" className="btn btn-dark" activeClassName="active">Users</NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <AppBar />
            <Inicio />
          </Route>
          <Route path="/bla">
            <Bla />
          </Route>
          <Route path="/users/:id" exact>
            <User />
          </Route>
          <Route path="/users">
            <Parametros />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
