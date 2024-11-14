import "./App.css";
import Layout from "./templates/layout/Layout";
import Dashboard from "./templates/dashboard/Dashboard";
import { useState } from "react";
import React from "react";

function App() {
  const [page, setPage] = useState("Dashboard");

  const handleSidebarChange = (newPage) => {
    console.log("Page changed to:", newPage);
    setPage(newPage);
  };
  return (
    <Layout onSidebarChange={handleSidebarChange}>
      {page == "Dashboard" && <Dashboard />}
      {page == "Customers" && <React.Fragment />}
      {page == "Orders" && <React.Fragment />}
      {page == "Refunds Issued" && <React.Fragment />}
      {page == "Products" && <React.Fragment />}
    </Layout>
  );
}

export default App;
