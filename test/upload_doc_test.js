const chakram = require('chakram');
const expect = chakram.expect;
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
    it("should upload doc to user profile", function () {

        return chakram
            .post('http://localhost:3003/document/upload', undefined, config)
            .then(function(response){
    			console.log(response.body);
    			expect(response).to.have.status(200);
    		});
    });
});