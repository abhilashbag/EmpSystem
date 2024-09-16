import React, { useEffect, useRef, useState } from "react";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  const loadEmployee = async () => {
    try {
      const response = await fetch("http://localhost:4000/employee");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      // console.log(data);
      setEmployee(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const HandleDeleteUser = async (id, name) => {
    if (window.confirm(`Are you want to delete user ${name}`)) {
      const response = await fetch(`http://localhost:4000/employee/${id}`, {
        method: "DELETE",
      });
      if (response) {
        alert("Successfully user Deleted!");
        setEmployee(employee.filter((emp) => emp._id !== id));
      }
    } else {
      console.log("Error while deleting user.");
    }
  };

  const HandleUpdateUser = () => {
    console.log("update user");
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <>
      <h1 className="">EmployeeList</h1>
      <div className="card-container">
        {employee.map((emp) => {
          console.log(emp);
          const {
            _id,
            name,
            gender,
            mobile_number,
            email,
            image,
            course,
            designation,
          } = emp;

          return (
            <div key={_id} className="card ">
              <div className="left">
                <img src={image} className="profile-image" alt="..." />
              </div>
              <div className="card-body">
                <h3 className="card-title text-center fw-bold">{name}</h3>
                <div className="d-flex ">
                  <label className="fs-6 fw-bold">Name:</label>
                  <p className="card-text m-0">{email}</p>
                </div>
                <div className="d-flex">
                  <label className="fs-6 fw-bold">Mobile :</label>
                  <p className="card-text m-0">{mobile_number}</p>
                </div>
                <div className="d-flex">
                  <label className="fs-6 fw-bold">Course :</label>
                  <p className="card-text m-0">{course}</p>
                </div>
                <div className="d-flex">
                  <label className="fs-6 fw-bold">Designation:</label>
                  <p className="card-text m-0">{designation}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <a
                    href="#"
                    className="btn btn-primary mt-2"
                    onClick={() => HandleDeleteUser(_id, name)}
                  >
                    Delete
                  </a>
                  <a
                    href="#"
                    className="btn btn-warning mt-2"
                    onClick={() => HandleUpdateUser(_id, name)}
                  >
                    Update
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EmployeeList;
