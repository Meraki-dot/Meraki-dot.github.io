import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import TOA from "./components/Pages/TOA";
import Preparation from "./components/Pages/Preparation";
import Services from "./components/Pages/Services";
import Appointment from "./components/Pages/Appointment";
import AboutMe from "./components/Pages/AboutMe";
import Schedule from "./components/Pages/Schedule";

const App = () => {

  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/toa" component={TOA} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/preparation" component={Preparation} />
          <Route path="/services" component={Services} />
          <Route path="/appointments" component={Appointment} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
