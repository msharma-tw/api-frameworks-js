const request = require("supertest")("http://localhost:3003");
const expect = require("chai").expect;

const sessionPayload = {
    "username": "test",
    "password": "password"
}

describe("GET /patients/me", function() {
    it("should fetch details", async function () {
        
        const sessionResponse = await request
            .post("/sessions")
            .send(sessionPayload);
        
        const authToken = sessionResponse.body.accessToken;
        
        const profileResponse = await request
            .get("/patients/me")
            .set("Authorization", authToken);
        expect(profileResponse.status).to.eql(200);
        console.log(profileResponse.body);
    });
});
