const chakram = require("chakram");
const expect = chakram.expect;

const sessionPayload = {
  username: "test",
  password: "password",
};

describe("GET /patients/me", function () {
  it("should fetch details", function () {
    chakram
      .post("http://localhost:3003/sessions", sessionPayload)
      .then(function (sessionResponse) {
        var authToken = sessionResponse.body.accessToken;
        return chakram
          .get("http://localhost:3003/patients/me", {
            headers: {
              Authorization: authToken,
            },
          })
          .then(function (profileDetailsResponse) {
            expect(profileDetailsResponse).to.have.status(200);
          });
      });
    return chakram.wait();
  });
});
