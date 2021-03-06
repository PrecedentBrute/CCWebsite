import "./App.css";
import Home from "./Containers/Home/Home";
import OurTeam from "./Containers/OurTeam/OurTeam";
import Login from "./Components/Login/Login"
import Departments from "./Containers/Departments/Departments"
import Navbar from './Components/Navbar/Navbar'
import BlogCards from './Components/Blogcards/blogcard'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div>
          <Navbar />
          
          <Switch>
              <Route exact path='/home' component={Home} />
              <Route path='/ourteam' component={OurTeam} />
              <Route path='/departments' component={Departments} />
              <Route path='/login' component={Login} />
              <Route path='/blog' component={BlogCards} />
          </Switch>
        </div>
      </Router>
  );
}
export default App;
