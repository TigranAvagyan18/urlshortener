import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";
import Login from "./components/login";

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={Main}/>
      <Route exact path='/login' component={Login}/>
    </React.Fragment>
  );
}

export default App;
