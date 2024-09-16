import Employee from "../models/Employee.js";

class Employeecontrollers {
  //Get All Users list
  async getAllEmployees(req, res) {
    try {
      const employees = await Employee.find();
      res.status(200).send(employees);
      console.log("Data fetched successfully!");
    } catch (error) {
      res.status(500).send({ message: "Error fetching data" });
    }
  }

  //Update ecmployee
  async updateEmployee(req, res) {
    try {
      const id = req.params.id;
      const updatedEmployee = req.body;

      const employee = await Employee.findByIdAndUpdate(id, updatedEmployee, {
        new: true,
        runValidators: true,
      });

      if (!employee) {
        res.status(500).send({ error: "Employee Not Found" });
      } else {
        res.status(201).send(employee);
        console.log(employee);
      }
    } catch (error) {
      res.status(500).send({ message: error });
      console.log("Internal error while Updating ");
    }
  }
  //Delete employee
  async deleteEmployee(req, res) {
    try {
      const id = req.params.id;
      const employee = await Employee.findByIdAndDelete(id);
      if (!employee) {
        res.status(500).send({ error: "Employee Not Found" });
      } else {
        res.status(201).send({ message: "Delete Successfull" });
        console.log(employee);
      }
    } catch (error) {
      res.status(500).send({ message: error });
      console.log("Internal error while Updating ");
    }
  }
}

export default new Employeecontrollers();
