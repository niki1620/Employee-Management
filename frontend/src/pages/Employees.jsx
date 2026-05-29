import { useEffect, useState } from "react";
import API from "../api/axios";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // ✅ FIX: include ALL backend-required fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    department: "",
    jobTitle: "",
    salary: "",
    dateOfJoining: "",
    isActive: true
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
      email: emp.email || "",
      country: emp.country || "",
      department: emp.department || "",
      jobTitle: emp.jobTitle || "",
      salary: emp.salary || "",
      dateOfJoining: emp.dateOfJoining
        ? emp.dateOfJoining.split("T")[0]
        : "",
      isActive: emp.isActive ?? true
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
          <input name="email" value={formData.email} onChange={handleChange} />
          <input name="country" value={formData.country} onChange={handleChange} />
          <input name="department" value={formData.department} onChange={handleChange} />
          <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
          <input name="salary" value={formData.salary} onChange={handleChange} />

          <input
            type="date"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
          />

          <label>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
            />
            Active
          </label>

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