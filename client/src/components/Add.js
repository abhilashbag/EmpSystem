import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Create a FormData object to include file data
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(value[key], value);
    });

    console.log(formData);
    try {
      const response = await fetch("http://localhost:4000/employee/register", {
        method: "POST",
        body: formData,
        headers: {
          // Don't set Content-Type header manually; browser sets it automatically for FormData
          Authorization: "Bearer your-token-here",
          "X-Custom-Header": "CustomValue",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const result = await response.json();
      if (result) {
        alert("Successfully Employee Added to Database!");
        navigate("/employeelist");
      }
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  let sttyle = {
    backgroundColor: "black",
    color: "green",
    width: "40%",
    margin: "auto",
    padding: "10px 30px",
    borderRadius: "10px",
  };

  return (
    <>
      <form className="form" style={sttyle} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            {...register("mobile_number", {
              required: "Mobile number is required",
            })}
          />
          {errors.mobile_number && (
            <p className="text-danger">{errors.mobile_number.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="designation" className="form-label">
            Designation:
          </label>
          <select
            className="form-select"
            id="designation"
            {...register("designation", {
              required: "Designation is required",
            })}
          >
            <option value="">Select Designation</option>
            <option value="Hr">Hr</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
          {errors.designation && (
            <p className="text-danger">{errors.designation.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <div className="d-flex gap-4">
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="male"
                value="male"
                {...register("gender", { required: "Gender is required" })}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="female"
                value="female"
                {...register("gender")}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          {errors.gender && (
            <p className="text-danger">{errors.gender.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Course:</label>
          <div className="d-flex gap-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="Mca"
                value="Mca"
                {...register("course")}
              />
              <label className="form-check-label" htmlFor="Mca">
                MCA
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="Bca"
                value="Bca"
                {...register("course")}
              />
              <label className="form-check-label" htmlFor="Bca">
                BCA
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="Bsc"
                value="Bsc"
                {...register("course")}
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
            id="image"
            {...register("image", { required: "Profile image is required" })}
          />
          {errors.image && (
            <p className="text-danger">{errors.image.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddEmployee;
