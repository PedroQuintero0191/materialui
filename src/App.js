import logo from './logo.svg';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";

import Login from './components/Login';
// import Registro from './components/Registro';
// import FormularioRegistro from './components/FormularioRegistro';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './temaConfig';

function App() {
  return (

    <ThemeProvider theme={theme}>

    <Login/>
    </ThemeProvider>
  );
}

export default App;
