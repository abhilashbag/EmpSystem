import React from "react";
import { useForm } from "react-hook-form";

const EmployeeList = () => {
  const { register, handleSubmit, errors = state } = useForm();
  handleSubmit = () => {
    console.log(name);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          {...register("name")}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          {...register("email")}
        />
        <input
          type="text"
          name="mobile_number"
          placeholder="Enter mobile number"
        />
        <div className="gender">
          <label htmlFor="gender">
            <input type="text" name="gender" />
            :Male
          </label>
          <label htmlFor="gender">
            <input type="text" name="gender" />
            :Female
          </label>
        </div>
        <div>
          <label for="course">Select course</label>
          <label for="course">
            <input type="radio" name="course" value={"Mca"} />
            MCA
          </label>
          <label for="">
            <input type="radio" name="course" value={"Bca"} />
            BCA
          </label>
          <label for="course">
            <input type="radio" name="course" value={"Bsc"} />
            BSC
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </>
  );
};

export default EmployeeList;
