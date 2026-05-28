import { useEffect, useState } from "react";
import API from "../api/axios";
import axios from "axios";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  const [employees, setEmployees] = useState([]);

  // ✅ EDIT STATES (MISSING IN YOUR CODE)
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    country: "",
    salary: ""
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");
      setEmployees(res.data);
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  const addEmployee = async (data) => {
    await API.post("/employees", data);
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}`);
    fetchEmployees();
  };

  // ✅ EDIT
  const handleEdit = (emp) => {
    setSelectedEmployee(emp);

    setFormData({
      fullName: emp.fullName,
      jobTitle: emp.jobTitle,
      country: emp.country,
      salary: emp.salary,
    });
  };

  // ✅ CHANGE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ UPDATE
  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/employees/${selectedEmployee.id}`,
        formData
      );

      alert("Employee updated successfully");

      fetchEmployees();
      setSelectedEmployee(null);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">Employees</h1>

      <div className="card">
        <EmployeeForm onSubmit={addEmployee} />
      </div>

      {/* ✅ EDIT FORM */}
      {selectedEmployee && (
        <div className="card">
          <h3>Edit Employee</h3>

          <input name="fullName" value={formData.fullName} onChange={handleChange} />
          <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
          <input name="country" value={formData.country} onChange={handleChange} />
          <input name="salary" value={formData.salary} onChange={handleChange} />

          <button onClick={handleUpdate}>Update</button>
        </div>
      )}

      <div className="card">
        <EmployeeTable
          employees={employees}
          handleDelete={deleteEmployee}
          handleEdit={handleEdit}   // ✅ IMPORTANT
        />
      </div>
    </div>
  );
}

export default Employees;