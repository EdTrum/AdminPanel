import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import store from "./redux/store"
import Signin from "./pages/Signin"
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import {SIGN_IN_SUCCESS} from "./redux/types"
import {signOutUser} from "./api"
import AuthRoute from "./AuthRoute"

const token = localStorage.edtrumA
if (token){
    const decodedToken = jwtDecode(token)
    if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(signOutUser());
        window.location.href = '/';
    } else {
        store.dispatch({type: SIGN_IN_SUCCESS});
        axios.defaults.headers.common['Authorization'] = token;
    }
}

function App() {
  return (
    <Provider store={store}>
        <Router>
            <AuthRoute exact path='/' component={Signin} />
            <Route path='/dashboard' component={NavBar} />
        </Router>
    </Provider>
  );
}

export default App;
