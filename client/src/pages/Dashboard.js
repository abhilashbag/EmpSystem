import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-fluid d-flex justify-content-between">
      <div className="">Hello</div>
      <div className="">
        <Link to={"/"}>Logout</Link>
      </div>
    </div>
  );
};

export default Dashboard;
