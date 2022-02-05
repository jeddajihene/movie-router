import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";

import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Error from "./Pages/Error/Error";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Movies" component={Movies} />
        <Route path="/MovieDetails/:id" component={MovieDetails} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
