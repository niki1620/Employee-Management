const prisma = require("../config/db");

exports.getCountryAnalytics = async (req, res) => {
  try {
    const data = await prisma.employee.groupBy({
      by: ["country"],
      _avg: {
        salary: true,
      },
      _min: {
        salary: true,
      },
      _max: {
        salary: true,
      },
      _count: true,
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
