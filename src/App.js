
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';
import Welcome from './Pages/Welcome';
import StudyModuleList from './Pages/StudyModuleList';
import StudyModuleDetail from './Pages/StudyModuleDetail';


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/studies-modules-detail">
            <StudyModuleDetail />
          </Route>

          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          
          <Route path="/studies-modules">
            <StudyModuleList />
          </Route>
          
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
