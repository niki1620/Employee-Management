import { useEffect, useState } from "react";
import API from "../api/axios";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  const [employees, setEmployees] = useState([]);

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
      console.log("FETCH ERROR:", err.response?.data || err.message);
    }
  };

  const addEmployee = async (data) => {
    try {
      await API.post("/employees", data);
      fetchEmployees();
    } catch (err) {
      console.log("ADD ERROR:", err.response?.data || err.message);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await API.delete(`/employees/${id}`);
      fetchEmployees();
    } catch (err) {
      console.log("DELETE ERROR:", err.response?.data || err.message);
    }
  };

  const handleEdit = (emp) => {
    setSelectedEmployee(emp);

    setFormData({
      fullName: emp.fullName || "",
      jobTitle: emp.jobTitle || "",
      country: emp.country || "",
      salary: emp.salary || ""
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await API.put(`/employees/${selectedEmployee.id}`, formData);

      alert("Employee updated successfully");

      fetchEmployees();
      setSelectedEmployee(null);

    } catch (error) {
      console.log("UPDATE ERROR:", error.response?.data || error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">Employees</h1>

      <div className="card">
        <EmployeeForm onSubmit={addEmployee} />
      </div>

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
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default Employees;