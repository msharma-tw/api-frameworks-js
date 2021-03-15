const request = require("supertest")("http://localhost:3003");
const expect = require("chai").expect;
const fs = require('fs');
const path = require('path');

const document = path.resolve('./zipFile.zip');
const config = {
    'formData': {
        'file': fs.createReadStream(document),
    },
    'headers': {
        'Content-Type': 'multipart/form-data'
    }
}

describe("POST /document/upload", function() {
    it("should upload doc to user profile", async function () {

        const uploadDocResponse = await request
            .post("/document/upload")
            .send(config);

        expect(uploadDocResponse.status).to.eql(201);
        console.log(uploadDocResponse.body);
    });
});