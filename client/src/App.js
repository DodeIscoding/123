import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import Main from "./components/views/Page/Main"
import Communication from "./components/views/Page/Communication"
import CCTV from "./components/views/Page/CCTV"
import Parking from "./components/views/Page/Parking"

import MapContainer from "./components/views/html/KakaoMap"


function App() {
  return (
    <Router>
    <div>
       <Switch>
          <Route exact path="/map" component={Auth(MapContainer,null)} />
          <Route exact path="/" component={Auth(Main,null)} />
          <Route exact path="/Communication" component={Auth(Communication,null)} />
          <Route exact path="/CCTV" component={Auth(CCTV,null)} />
          <Route exact path="/Parking" component={Auth(Parking,null)} />
          <Route exact path="/Landing" component={Auth(LandingPage, null )  } />
          <Route exact path="/Login" component={Auth(LoginPage, false) } />
          <Route exact path="/Register" component={Auth(RegisterPage, false)} />
        </Switch>
    </div>
  </Router>
);
}

export default App;

