const request = require("supertest")("http://localhost:3003");
const expect = require("chai").expect;

describe("GET /heartbeat", function() {
    it("should always be UP", async function () {

        const response = await request.get("/v0.5/heartbeat");

        expect(response.status).to.eql(200);
        expect(response.body.status).to.contain("UP");
    });
    
});