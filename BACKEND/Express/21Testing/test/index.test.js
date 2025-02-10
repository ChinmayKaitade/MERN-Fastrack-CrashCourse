const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("should return Hello, World!", (done) => {
    request(app).get("/").expect(200, "Hello, World!", done);
  });
});

describe("POST /user", () => {
  it("should create a user with valid data", (done) => {
    request(app)
      .post("/user")
      .send({ name: "John" })
      .expect(201, "User John created", done);
  });

  it("should return 400 if name is missing", (done) => {
    request(app).post("/user").send({}).expect(400, "Name is required", done);
  });
});
