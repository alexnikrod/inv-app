import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./component/NavBar";
import CustomersContainer from "./component/Customers/CustomersContainer";
import InvoicesContainer from "./component/Invoices/InvoicesContainer";
import ProductsContainer from "./component/Products/ProductsContainer";
import HistoryContainer from "./component/History/HistoryContainer";
import AddNewCustomer from "./component/Customers/AddNewCustomer";
import NewCustomer from "./component/Customers/NewCustomer";


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
        {/* <Route path="/customers/:id" render={() => <AddNewCustomer />} /> */}
        {/* <Route path="/customers/:id" component={AddNewCustomer} /> */}
        {/* <Route path="/customers/new" render={() => <NewCustomer />} /> */}


      </Switch>
    </div>
  );
}

export default App;
