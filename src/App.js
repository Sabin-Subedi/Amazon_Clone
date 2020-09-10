import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Hamburger from "./components/Hamburger";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStatevalue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStatevalue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            {/* Home */}
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/ham'>
            <Header />
            <Hamburger />
          </Route>
          <Route path='/'>
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
