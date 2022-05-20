import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from "./components/views/LoginPage/LoginPage";
import NavBer from "./components/views/NavBar/NavBar";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/LandingPage">LandingPage</Link>
        </li>
        <li>
          <Link to="/LoginPage">LoginPage</Link>
        </li>
        <li>
          <Link to="/NavBer">NavBer</Link>
        </li>
        <li>
          <Link to="/RegisterPage">RegisterPage</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
    <Routes>

<Route path="/LandingPage" element={<LandingPage />} />

<Route path="/LoginPage" element={<LoginPage />} />

<Route path="/NavBer" element={<NavBer />} />

<Route path="/RegisterPage" element={<RegisterPage />} />

</Routes>
    </div>
  </Router>
);
}

export default App;

