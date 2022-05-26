import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from "./components/views/LoginPage/LoginPage";
import NavBer from "./components/views/NavBar/NavBar";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import footer from "./components/views/Footer/Footer"


function App() {
  return (
    <Router>
    <div>
      {/* <ul>
      <li>
          <Link to="/footer">Forter</Link>
        </li>
        <li>
          <Link to="/LandingPage">LandingPage</Link>
        </li>
        <li>
          <Link to="/LoginPage">LoginPage</Link>
        </li>
        <li>
          <Link to="/RegisterPage">RegisterPage</Link>
        </li>
      </ul> */}

      {/* <hr /> */}

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
 <Switch>
          <Route exact path="/LandingPage" component={Auth(LandingPage, null )  } />
          <Route exact path="/footer" component={Auth(footer, null )  } />
          <Route exact path="/LoginPage" component={Auth(LoginPage, false) } />
          <Route exact path="/RegisterPage" component={Auth(RegisterPage, false)} />
        </Switch>
    </div>
  </Router>
);
}

export default App;

