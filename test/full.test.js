const retype = require('../index.js');

const model = {
    "Birth": "Date",
    "Death": "Date",
    "Inutil": "Remove",
    "Begin": "DateTime",
    "End": "DateTime",
    "Value": "Decimal",
    "Quantity": "Int"
};

let json = {
    "Id": "1111",
    "Birth": "20/04/1975",
    "Inutil": "20/04/1975",
    "Value": "43242,33",
    "Other": {
        "Birth": "20/04/1975",
        "Inutil": "20/04/1975",
        "Begin": "20/04/1975 08:00:18",
        "End": "20/04/1975 20:00:18",
        "Value": "123,123",
        "Quantity": "123"
    },
    "Others": [{
        "Other": {
            "Birth": "20/04/1975",
            "Inutil": "20/04/1975",
            "Begin": "20/04/1975 18:46:18",
            "End": "20/04/1975 11:30:38",
            "Value": "43242,33",
            "Quantity": "43242"
        }
    },{
        "Other": {
            "Birth": "20/04/1975",
            "Begin": "20/04/1975 12:43:18",
            "End": "20/04/1975 2:00:11",
            "Quantity": "42"
        }
    },{
        "Other": {
            "Death": "20/04/2090",
            "Begin": "20/04/1975 08:12:18",
            "End": "20/04/1975 20:11:10",
            "Value": "432,32",
            "Quantity": "4"
        }
    } ]
};

let result = {
    "Id": "1111",
    "Birth": new  Date(1975,3,20),
    "Value": 43242.33,
    "Other": {
        "Birth": new  Date(1975,3,20),
        "Begin": new Date(1975,3,20,8,0,18),
        "End":  new Date(1975,3,20,20,0,18),
        "Value": 123.123,
        "Quantity": 123
    },
    "Others": [{
        "Other": {
            "Birth": new  Date(1975,3,20),
            "Begin": new Date(1975,3,20,18,46,18),
            "End": new Date(1975,3,20,11,30,38),
            "Value": 43242.33,
            "Quantity": 43242
        }
    },{
        "Other": {
            "Birth": new  Date(1975,3,20),
            "Begin": new Date(1975,3,20,12,43,18),
            "End": new Date(1975,3,20,2,0,11),
            "Quantity": 42
        }
    },{
        "Other": {
            "Death": new  Date(2090,3,20),
            "Begin": new Date(1975,3,20,8,12,18),
            "End":  new Date(1975,3,20,20,11,10),
            "Value": 432.32,
            "Quantity": 4
        }
    } ]
};

test('cast MultiCast String Super parse', () => {
    expect(retype(json,model)).toEqual(result);
});