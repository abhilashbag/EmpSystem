import React from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create a FormData object from the form
    const form = e.target;
    const formData = new FormData(form); // Automatically includes file

    console.log(formData);
    // Use fetch to send form data to the server
    try {
      const response = await fetch("http://localhost:4000/employee/register", {
        method: "POST", // Use POST method
        body: formData, // Send FormData as the body
        headers: {
          // Don't set Content-Type header manually; browser sets it automatically for FormData
          Authorization: "Bearer your-token-here", // Include any additional headers if necessary
          "X-Custom-Header": "CustomValue",
        },
      });

      // Check if the response is okay
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const result = await response.json(); // Parse the JSON response
      if (result) {
        alert("Successfully Employee Added to Database!");
        navigate("/employeelist");
      }
      console.log("Success:", result); // Log success message
    } catch (error) {
      console.error("Error:", error); // Log any errors
    }
  };

  let sttyle = {
    backgroundColor: "black",
    color: "green",
    width: " 40%",
    margin: "auto",
    padding: "10px 30px",
    borderRadius: "10px",
  };
  return (
    <>
      <form className="form" style={sttyle} onSubmit={HandleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" className="form-control" name="name" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number:
          </label>
          <input
            type="text"
            className="form-control"
            name="mobile_number"
            id="mobile"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="designation" className="form-label">
            Designation:
          </label>
          <select className="form-select" name="designation" id="designation">
            <option>Select Designation</option>
            <option value={"Hr"}>Hr</option>
            <option value={"Manager"}>Manager</option>
            <option value={"Sales"}>Sales</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <div className="d-flex gap-4">
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                id="male"
                value={"male"}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                id="female"
                value={"female"}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Course:</label>
          <div className="d-flex gap-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="course"
                id="Mca"
                value={"Mca"}
              />
              <label className="form-check-label" htmlFor="Mca">
                MCA
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="course"
                id="Bca"
                value={"Bca"}
              />
              <label className="form-check-label" htmlFor="Bca">
                BCA
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="course"
                id="Bsc"
                value={"Bsc"}
              />
              <label className="form-check-label" htmlFor="Bsc">
                BSC
              </label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Profile Image:
          </label>
          <input
            type="file"
            className="form-control"
            name="image"
            id="image"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddEmployee;
