import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// site Live Link: https://pedantic-wright-21e2c7.netlify.app/

//https://zagroo-5a216.web.app

// views without layouts

import Landing from "views/Landing.js";
import Contact from "views/Contact.js";
import Index from "views/Index.js";
import Blog from "views/Blog";
import Services from "views/Services";
import caseStudies from "views/caseStudies";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/services" exact component={Services} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/" exact component={Index} />
      <Route path="/caseStudies" exact component={caseStudies} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
