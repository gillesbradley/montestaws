
import React, {useEffect, useState} from "react";
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


function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  // const handleLogin = () => {
  //   clearErrors();

  //   firebaseConfig
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch(error => {
        // switch(error.code){
        //   case "auth/invalid-email":
        //   case "auth/user-disabled":
        //   case "auth/user-not-found":
        //     setEmailError(error.message);
        //     break;
          
        //   case "auth/wrong-password":
        //     setPasswordError(error.message);
        //     break;
        // }
  //     })
  // }

  // const handleRegister = () => {
  //   clearErrors();

  //   firebaseConfig
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch(error => {
  //       switch(error.code){
  //         case "auth/email-already-in-use":
  //         case "auth/invalid-email":
  //           setEmailError(error.message);
  //           break;
          
  //         case "auth/weak-password":
  //           setPasswordError(error.message);
  //           break;
  //       }
  //     })
  // }

  // const handleLogout = () => {
  //   firebaseConfig.auth().signOut();
  // }

  // const authListener = () => {
  //   firebaseConfig.auth().onAuthStateChanged((user) => {
  //     if(user){
  //       clearInputs();
  //       setUser(user);
  //     }else{
  //       setUser("");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   authListener();
  // }, [])

  return (
    <AuthProvider>

      <Router>
          <Switch>
            <Route path="/studies-modules-detail" component={StudyModuleDetail} />

            <Route path="/forgot-password" component={ForgotPassword} />

            <PrivateRoute exact path="/studiesModules" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registerStep" component={RegisterStep} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Welcome} />
          </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
