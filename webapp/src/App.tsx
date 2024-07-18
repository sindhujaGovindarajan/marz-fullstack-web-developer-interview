import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
