This packet is  meant to compliant and mitigate missing parts of
Some of the most popular json-schema-validators out there.

Install:

`yanr add json-schema-local-refrances
`

Or

`npm install json-schema-local-refrances
`

Usage:

````
import { dataReplacer } from 'json-schema-local-refrances';

const newSchema = dataReplacer(myCuttentSchema, myPlaceHolder, myPaylopad);
 
````

For example, if you have a schema with a variable that relies on in the payload you can create a schema like so:
``````
const schema = {
    newValue: {
        type: number,
        exclusiveMaximum: $oldValue, // please note that I chose here $ to be my "myPlaceHolder"
    },
    oldValue: {
        type: numner, 
    }
};
``````
This schema is tying to validate a payload that the old value is greater than the new value.

Let's see it in action with the schema above:

``````
import { dataReplacer } from 'json-schema-local-refrances';
import Ajv from "ajv"; // one of many supported schame libraries

const myCuttentSchema = {
    type: 'object',
    properties: {
        newValue: {
            type: number,
            exclusiveMaximum: $oldValue,
        },
        oldValue: {
            type: numner, 
        }
    },
};

const badPayload = { // won't be valid
    oldValue: 1,
    newValue: 6,
};

const goodPaylad = { // will be valid
    oldValue: 99,
    newValue: 6,
};

const myPlaceHolder = '$';

const newSchema = dataReplacer(myCuttentSchema, myPlaceHolder, myPaylopad);

const validate = ajv.compile(newSchema);

validate(badPayload); // yealsd false;
validate(goodPaylad); // yealsd true (acctualy it returns the object);

``````

Credits:
