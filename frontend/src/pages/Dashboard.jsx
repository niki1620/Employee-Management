import { useEffect, useState } from "react";

import API from "../api/axios";

import StatsCard from "../components/StatsCard";

function Dashboard() {
  const [stats, setStats] =
    useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get(
        "/employees/insights/salary"
      );

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!stats)
    return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1 className="page-title">
        Salary Dashboard
      </h1>

      <div className="stats-grid">
        <StatsCard
          title="Total Employees"
          value={
            stats.totalEmployees
          }
        />

        <StatsCard
          title="Average Salary"
          value={stats.averageSalary}
        />

        <StatsCard
          title="Maximum Salary"
          value={stats.maxSalary}
        />

        <StatsCard
          title="Minimum Salary"
          value={stats.minSalary}
        />
      </div>
    </div>
  );
}

export default Dashboard;