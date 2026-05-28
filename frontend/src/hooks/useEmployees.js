import { useEffect, useState } from "react";
import API from "../api/axios";

function useEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await API.get("/employees");

    setEmployees(res.data);
  };

  return {
    employees,
    fetchEmployees,
  };
}

export default useEmployees;