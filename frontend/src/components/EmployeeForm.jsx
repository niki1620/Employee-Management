import { useState } from "react";

function EmployeeForm({ onSubmit }) {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      salary: Number(formData.salary),
    });

    // reset form
    setFormData({
      fullName: "",
      email: "",
      country: "",
      department: "",
      jobTitle: "",
      salary: "",
      dateOfJoining: "",
      isActive: true
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dateOfJoining"
          value={formData.dateOfJoining}
          onChange={handleChange}
        />

        <label style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
          Active
        </label>
      </div>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;