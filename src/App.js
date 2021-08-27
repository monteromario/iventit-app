import './App.css';
import Navigation from './components/Navbar'
import HomeEvents from './components/HomeEvents'
import Map from './components/Map'
import Favs from './components/Favs'
import Login from './components/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/map">
            <Map />
        </Route>
        <Route path="/favs">
            <Favs />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/">
          <HomeEvents />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
