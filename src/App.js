import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                {/*<Route exact path='/login' component={Login}/>*/}
            </Switch>
        </Router>
    )
}

export default App
