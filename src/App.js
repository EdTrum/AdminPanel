import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Layout from "./pages/Layout";
import Category from "./pages/Category";
import Course from "./pages/Course";
import User from "./pages/User";
import Topic from "./pages/Topic";
import Home from "./components/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <NavBar />
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/categories' component={Category} />
          <Route exact path='/courses' component={Course} />
          <Route exact path='/topics' component={Topic} />
          <Route exact path='/users' component={User} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
