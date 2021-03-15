const frisby = require("frisby");
const Joi = frisby.Joi;

const sessionPayload = {
  username: "johndoe@hfl",
  password: "password",
};

it("POST /patients/me - fetch profile details", function () {
  return (
    frisby
      .post("http://localhost:3003/sessions", sessionPayload)
      // .inspectRequest()
      .expect("status", 200)
      .then(function (sessionResponse) {
        let authToken = sessionResponse.json.accessToken;
        return (
          frisby
            .setup({
              request: {
                headers: {
                  Authorization: authToken,
                },
              },
            })
            .get("http://localhost:3003/patients/me")
            // .inspectResponse()
            .expect("status", 200)
            .expect("jsonTypes", "verifiedIdentifiers.*", {
              type: Joi.string(),
              value: Joi.string().required(),
            })
        );
      })
  );
});


