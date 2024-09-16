import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";
import Layout from "./components/Layout.js";
import EmployeeList from "./components/EmployeeList.js";
import AddEmployee from "./components/AddEmployee.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/login" element={<Login />} />
          <Route path="/create" element={<AddEmployee />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
