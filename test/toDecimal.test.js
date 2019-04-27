const retype = require('../index.js');

const model = {
    "Value": "Decimal"
};

let json = {
    "Id": "1111",
    "Value": "123123,12",
    "Other": {
        "Value": "43242,33"
    },
    "Others": [{
        "Other": {
            "Value": "1,33"
        }
    },{
        "Other": {
            "Value": "2,66"
        }
    },{
        "Other": {
            "Value": "3,99"
        }
    } ]
};

let result = {
    "Id": "1111",
    "Value": 123123.12,
    "Other": {
        "Value": 43242.33
    },
    "Others": [{
        "Other": {
            "Value": 1.33
        }
    },{
        "Other": {
            "Value": 2.66
        }
    },{
        "Other": {
            "Value": 3.99
        }
    } ]
};

test('cast Value String to Decimal', () => {
    expect(retype(json,model)).toEqual(result);
});