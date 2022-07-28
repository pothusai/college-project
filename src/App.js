import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Course from "./Task3/course";
import Staff from "./Task3/staff";
import Student from "./Task3/student";


function App(){
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/student'>Student</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/staff">
            <Staff />
          </Route>
          <Route path="/course">
            <Course />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
