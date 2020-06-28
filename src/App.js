import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { withSuspense } from "./component/withSuspense";
import NavBar from "./component/NavBar";

import "./App.css";
import Login from "./component/Login";
// Lazy loading with Suspense
const InvoicesContainer = React.lazy(() =>
  import("./component/Invoices/InvoicesContainer")
);
const CustomersContainer = React.lazy(() =>
  import("./component/Customers/CustomersContainer")
);
const ProductsContainer = React.lazy(() =>
  import("./component/Products/ProductsContainer")
);
const HistoryContainer = React.lazy(() =>
  import("./component/History/HistoryContainer")
);

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/invoices"} />} />
        <Route path="/invoices" render={withSuspense(InvoicesContainer)} />
        <Route path="/customers" render={withSuspense(CustomersContainer)} />
        <Route path="/products" render={withSuspense(ProductsContainer)} />
        <Route path="/history" render={withSuspense(HistoryContainer)} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
