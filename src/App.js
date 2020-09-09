import React from "react";
import "./App.css";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/checkout'>
            <Checkout />
            {/* Home */}
          </Route>
          <Route path='/'>
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
