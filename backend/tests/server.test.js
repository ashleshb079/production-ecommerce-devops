const request = require("supertest");
const app = require("../server");

describe("Backend API", () => {
  test("GET / should return a successful response", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe(
      "E-Commerce Backend API is running!"
    );
  });


  
  test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
  });
});