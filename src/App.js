import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import Admin from "./admin/Admin";
import User from "./user/User";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
              <Register />
          </Route>
          <Route path="/admin">
              <Admin />
          </Route>
          <Route path="/user">
              <User />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;