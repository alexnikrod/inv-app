import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./component/NavBar";
import CustomersContainer from "./component/Customers/CustomersContainer";
import InvoicesContainer from "./component/Invoices/InvoicesContainer";
import ProductsContainer from "./component/Products/ProductsContainer";
import HistoryContainer from "./component/History/HistoryContainer";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/invoices"} />} />
        <Route path="/invoices" render={() => <InvoicesContainer />} />
        <Route path="/customers" render={() => <CustomersContainer />} />
        <Route path="/products" render={() => <ProductsContainer />} />
        <Route path="/history" render={() => <HistoryContainer />} />
      </Switch>
    </div>
  );
}

export default App;
