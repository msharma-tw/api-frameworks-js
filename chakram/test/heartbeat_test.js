const chakram = require('chakram');
const expect = chakram.expect;

describe("GET /heartbeat", function() {
    it("should always be UP", function () {

        return chakram
            .get("http://localhost:3003/v0.5/heartbeat")
            .then(function(response){
                expect(response.body.status).to.contain("UP");
                expect(response).to.have.status(200);
            });
    });

});
