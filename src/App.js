import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const Hats = () => {
  return <h1>Hats</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
