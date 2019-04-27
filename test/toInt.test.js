const retype = require('../index.js');

const model = {
    "Quantity": "Int"
};

let json = {
    "Id": "1111",
    "Quantity": "123123",
    "Other": {
        "Quantity": "43242"
    },
    "Others": [{
        "Other": {
            "Quantity": "1"
        }
    },{
        "Other": {
            "Quantity": "2"
        }
    },{
        "Other": {
            "Quantity": "3"
        }
    } ]
};

let result = {
    "Id": "1111",
    "Quantity": 123123,
    "Other": {
        "Quantity": 43242
    },
    "Others": [{
        "Other": {
            "Quantity": 1
        }
    },{
        "Other": {
            "Quantity": 2
        }
    },{
        "Other": {
            "Quantity": 3
        }
    } ]
};

test('cast Quantity String to Int', () => {
    expect(retype(json,model)).toEqual(result);
});