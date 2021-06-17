import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";
import TodoContextApp from "./context/TodoContextApp";
import Home from "./Home";
import TodoRecoilApp from "./recoil/TodoRecoilApp";
import TodoReduxApp from "./redux/TodoReduxApp";

function App() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/context">Context API</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
          <li>
            <Link to="/recoil">Recoil</Link>
          </li>
        </ul>
      </div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/context" component={TodoContextApp} />
      <Route path="/redux" component={TodoReduxApp} />
      <Route path="/recoil" component={TodoRecoilApp} />
    </div>
  );
}

export default App;
