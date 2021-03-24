const pactum = require('pactum');

it("POST /document/upload - should UPLOAD THE DOCUMENT", async () => {
  await pactum.spec()
    .post("/document/upload")
    .withFile("./zipFile.zip")
    .expectStatus(201);
});
