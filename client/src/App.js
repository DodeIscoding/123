import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import Main from "./components/views/Page/Main"
import Communication from "./components/views/Page/Communication"


function App() {
  return (
    <Router>
    <div>
      <Main/>
      {/* <hr /> */}

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
 <Switch>
          <Route exact path="/Communication" component={Auth(Communication,null)} />
          <Route exact path="/LandingPage" component={Auth(LandingPage, null )  } />
          <Route exact path="/LoginPage" component={Auth(LoginPage, false) } />
          <Route exact path="/RegisterPage" component={Auth(RegisterPage, false)} />
        </Switch>
    </div>
  </Router>
);
}

export default App;

