const pactum = require('pactum');

it("POST /patients/me - fetch profile details", async () => {
  await pactum.spec()
    .post("/sessions")
    .withJson({
      "username": "johndoe@hfl",
      "password": "password",
    })
    .stores("Token", "accessToken");

  await pactum.spec()
    .get("/patients/me")
    .withHeaders("Authorization", "$S{Token}")
    .expectStatus(200);
});