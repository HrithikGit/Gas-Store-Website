import "./App.css";
import Layout from "./templates/layout/Layout";
import Dashboard from "./templates/dashboard/Dashboard";
import { useState } from "react";
import React from "react";
import Customers from "./templates/customers/Customers";
import RefundsIssued from "./templates/refunds/RefundsIssued";
import CustomerOrders from "./templates/orders/CustomerOrders";
// import CustomersGrid from "./templates/customers/CustomersGrid";

function App() {
  const [page, setPage] = useState("Home");

  const handleSidebarChange = (newPage) => {
    console.log("Page changed to:", newPage);
    setPage(newPage);
  };
  return (
    <Layout onSidebarChange={handleSidebarChange}>
      {page == "Home" && <Dashboard />}
      {page == "Customers" && <Customers />}
      {page == "Orders" && <CustomerOrders />}
      {page == "Refunds Issued" && <RefundsIssued />}
      {page == "Products" && <React.Fragment />}
    </Layout>
  );
}

export default App;
