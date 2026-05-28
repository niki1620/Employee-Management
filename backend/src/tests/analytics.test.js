const request = require("supertest");
const app = require("../app");

describe("Analytics API", () => {
  it("should return unauthorized", async () => {
    const res = await request(app).get(
      "/api/analytics/country"
    );

    expect(res.statusCode).toBe(401);
  });
});