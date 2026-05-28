import { useState } from "react";

function EmployeeForm({
  onSubmit,
}) {
  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      country: "",
      department: "",
      jobTitle: "",
      salary: "",
      joiningDate: "",
      status: "ACTIVE",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    setFormData({
      fullName: "",
      email: "",
      country: "",
      department: "",
      jobTitle: "",
      salary: "",
      joiningDate: "",
      status: "ACTIVE",
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
          name="joiningDate"
          value={
            formData.joiningDate
          }
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="ACTIVE">
            ACTIVE
          </option>

          <option value="INACTIVE">
            INACTIVE
          </option>
        </select>
      </div>

      <button type="submit">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;