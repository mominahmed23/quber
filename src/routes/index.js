import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Business from "../pages/Business";
import Roles from "../pages/Roles";
import Sales from "../pages/Sales";
import NotFound from "../pages/NotFound";
import Forms from "../pages/Forms";
import Layout from "../components/Layout/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Roles} />
          <Route path="/sales" component={Sales} />
          <Route path="/business" component={Business} />
          <Route path="/country" component={Forms}/>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
