import React from "react";
import { Link } from "react-router-dom";
const style = {
  textDecoration: "none",
  color: "#fff",
};
const Header = () => {
  return (
    <div className="" style={{ paddingBlock: "10px", textAlign: "center" }}>
      <ul className="d-flex flex-direction-row  gap-5 list-unstyled">
        <li className="nav-item">
          <Link style={style} to={"/"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link style={style} to={"/dashboard"}>
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link style={style} to={"/login"}>
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link style={style} to={"/employeelist"}>
            EmployeeList
          </Link>
        </li>
        <li className=" nav-item">
          <Link style={style} to={"/create"}>
            AddEmployee
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
