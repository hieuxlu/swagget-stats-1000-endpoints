const fs = require('fs');

const output = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "REST API",
    "description": ""
  },
  paths: {}
};

for (let index = 0; index < 1000; index++) {
  output.paths[`/test${index}`] = {
    "get": {
      "tags": [],
      "description": "",
      "parameters": [],
      "responses": {}
    }
  }
}

fs.writeFileSync('./swagger.json', JSON.stringify(output, null, 2));