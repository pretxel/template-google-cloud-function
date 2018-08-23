import { Validator } from 'jsonschema';

const schema = {
  "id": "/Person",
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "surnmae": {"type": "string"},
    "age": {"type": "integer", "minimum": 1}
  },
  "required": ["name", "age"]
};

const v = new Validator();

exports.helloWorldCF = (request, response) => {
  switch (request.method) {
    case 'POST':
      const data = request.body;

      if (v.validate(data, schema).valid){
        console.log('Correct');
        response.status(200).send(data);
      }else{
        console.log('Invalid');
        response.status(500).send('Invalid');
      }
    break;
    case 'GET':
      response.status(200).send('Hello World');
    break;
  }
};
