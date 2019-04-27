const retype = require('../index.js');

const model = {
    "Begin": "DateTime",
    "End": "DateTime",
};

let json = {
    "Id": "1111",
    "Begin": "20/04/1975 08:00:18",
    "Other": {
        "Begin": "20/04/1975 08:22:22"
    },
    "Others": [{
        "Other": {
            "Begin": "20/04/1975 12:00:18"
        }
    },{
        "Other": {
            "Begin": "20/04/1975 14:20:18"
        }
    },{
        "Other": {
            "End": "20/04/2090 13:33:44"
        }
    } ]
};

let result = {
    "Id": "1111",
    "Begin": new Date(1975,3,20,8,0,18),
    "Other": {
        "Begin":  new Date(1975,3,20,8,22,22) 
    },
    "Others": [{
        "Other": {
            "Begin":  new Date(1975,3,20,12,0,18) 
        }
    },{
        "Other": {
            "Begin":  new Date(1975,3,20,14,20,18) 
        }
    },{
        "Other": {
            "End":  new Date(2090,3,20,13,33,44) 
        }
    } ]
};

test('cast Begin and End String to DateTime', () => {
    expect(retype(json,model)).toEqual(result);
});