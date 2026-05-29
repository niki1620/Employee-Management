import { useEffect, useState } from "react";
import API from "../api/axios";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await API.get("/employees/insights/salary");

      console.log("Dashboard API raw response:", res.data);

      const data = res.data?.data ?? res.data;

      if (!data) {
        throw new Error("No data received from dashboard API");
      }

      setStats({
        totalEmployees: data.totalEmployees ?? 0,
        averageSalary: data.averageSalary ?? 0,
        maxSalary: data.maxSalary ?? 0,
        minSalary: data.minSalary ?? 0,
      });

    } catch (err) {
      console.log("Dashboard error:", err.response?.data || err.message);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h2 style={{ color: "red" }}>{error}</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Salary Dashboard</h1>

      <div className="stats-grid">
        <StatsCard title="Total Employees" value={stats?.totalEmployees} />
        <StatsCard title="Average Salary" value={stats?.averageSalary} />
        <StatsCard title="Maximum Salary" value={stats?.maxSalary} />
        <StatsCard title="Minimum Salary" value={stats?.minSalary} />
      </div>
    </div>
  );
}

export default Dashboard;