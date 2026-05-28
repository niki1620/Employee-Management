function EmployeeTable({ employees, handleDelete,handleEdit }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Department</th>
          <th>Job Title</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.fullName}</td>
            <td>{emp.email}</td>
            <td>{emp.country}</td>
            <td>{emp.department}</td>
            <td>{emp.jobTitle}</td>
            <td>{emp.salary}</td>
            <td>
              <button onClick={() => handleEdit(emp)}>
                Edit
              </button>
              <span style={{ marginLeft: "10px" }}></span>
              <button onClick={() => handleDelete(emp.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;