const request = require("supertest");
const app = require("../app");

describe("Employee API", () => {
  it("should return unauthorized", async () => {
    const res = await request(app).get("/api/employees");

    expect(res.statusCode).toBe(401);
  });
});