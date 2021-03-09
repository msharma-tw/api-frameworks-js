const frisby = require('frisby');

it("GET /heartbeat - should always be UP", function() {

    return frisby
        .get("http://localhost:3003/v0.5/heartbeat")
        // .inspectRequest()
        .expect('status', 200)
        .expect('json', 'status', 'UP')
        .then(function(response) {
            // console.log(response.json.timeStamp);
        });
});