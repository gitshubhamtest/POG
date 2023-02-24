import React from "react";
import "./styles.css";
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import "./App.css"
// import Deposite from "./components/Deposite";
// import Withdraw from "./components/Withdraw";

import Header from "./Header";

export default function App() {
  const slogan="POG"
  return (
    // <div>
    // <div className="App">
    //   <BrowserRouter>
    //   <div className="router-menu">
    //   <div></div>
    //   <Link to="/"  className="deposite-router">Deposite</Link>
    //   <Link to="/withdraw"  className="withdraw-router">Withdraw</Link>
    //   <Link to="/contact"  className="withdraw-router">Contact</Link>
    //   </div>
    //   <Switch>
    //     <Route exact path="/"  component={Deposite}><Deposite/></Route>
    //     <Route exact path="/withdraw" component={Withdraw}><Withdraw/></Route>
    //     <Route exact path="/contact" component={Contact}><Contact/></Route>
    //   </Switch>
    //   </BrowserRouter>
    // </div>
    // </div>
    <Header slogan={slogan}/>
  );
}
