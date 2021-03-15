const frisby = require("frisby");
const fs = require("fs");
const path = require("path");

it("POST /document/upload - should UPLOAD THE DOCUMENT", function () {
  const document = path.resolve("./zipFile.zip");
  const form = frisby.formData();
  form.append("file", fs.createReadStream(document));
  form.append("fileName", "zipFile.zip");
  form.append("fileType", "*.zip");

  return (
    frisby
      .post("http://localhost:3003/document/upload", { body: form })
      // .inspectRequest()
      .expect("status", 201)
      .then(function (response) {
        console.log(response.json);
      })
  );
});
