const countries = [
  "India",
  "USA",
  "Germany",
  "Canada",
  "UK",
];

const departments = [
  "Engineering",
  "HR",
  "Finance",
  "Marketing",
];

const jobTitles = [
  "Software Engineer",
  "HR Manager",
  "Product Manager",
  "QA Engineer",
  "Designer",
];

function randomItem(array) {
  return array[
    Math.floor(Math.random() * array.length)
  ];
}

function generateEmployee(index) {
  return {
    fullName: `Employee ${index}`,

    email: `employee${index}@company.com`,

    country: randomItem(countries),

    department: randomItem(departments),

    jobTitle: randomItem(jobTitles),

    salary:
      Math.floor(Math.random() * 90000) + 10000,

    joiningDate: new Date(),

    status: "ACTIVE",
  };
}

module.exports = {
  generateEmployee,
};