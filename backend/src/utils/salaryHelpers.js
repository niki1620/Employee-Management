exports.calculateAverageSalary = (
  employees
) => {
  if (!employees.length) return 0;

  const total = employees.reduce(
    (sum, emp) => sum + emp.salary,
    0
  );

  return total / employees.length;
};

exports.calculateMaxSalary = (
  employees
) => {
  return Math.max(
    ...employees.map((emp) => emp.salary)
  );
};

exports.calculateMinSalary = (
  employees
) => {
  return Math.min(
    ...employees.map((emp) => emp.salary)
  );
};