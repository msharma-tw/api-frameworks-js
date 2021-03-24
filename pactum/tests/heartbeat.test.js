const pactum = require('pactum');

it("GET /heartbeat - should always be UP", async () => {
  await pactum.spec()
    .get("/v0.5/heartbeat")
    .expectStatus(200)
    .expectJsonLike({
      "status": "UP"
    });
});