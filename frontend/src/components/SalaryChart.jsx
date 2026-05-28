import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function SalaryChart({ data }) {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="country" />

      <YAxis />

      <Tooltip />

      <Bar dataKey="_avg.salary" />
    </BarChart>
  );
}

export default SalaryChart;