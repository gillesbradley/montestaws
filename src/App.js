
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
import StudyModuleDetail from './Pages/StudyModuleDetail';
import PrivateRoute from "./PrivateRoute";
import Home from "./Pages/Home";
import { AuthProvider } from "./AuthProvider";
import RegisterStep from "./Pages/RegisterStep";
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <AuthProvider>

      <Router>
          <Switch>

            <Route path="/forgot-password" component={ForgotPassword} />

            <Route path="/studiesModulesDetail" component={StudyModuleDetail} />
            <PrivateRoute exact path="/studiesModules" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registerStep" component={RegisterStep} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Welcome} />
            
            
            <Route path='*' component={NotFound} />

          </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
