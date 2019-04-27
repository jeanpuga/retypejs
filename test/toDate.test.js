const retype = require('../index.js');

const model = {
    "Birth": "Date",
    "Death": "Date",
};

let json = {
    "Id": "1111",
    "Birth": "20/04/1975",
    "Other": {
        "Birth": "20/04/1975"
    },
    "Others": [{
        "Other": {
            "Birth": "20/04/1975"
        }
    },{
        "Other": {
            "Birth": "20/04/1975"
        }
    },{
        "Other": {
            "Death": "20/04/2090"
        }
    } ]
};

let result = {
    "Id": "1111",
    "Birth": new Date(1975,3,20),
    "Other": {
        "Birth":  new  Date(1975,3,20)
    },
    "Others": [{
        "Other": {
            "Birth":  new Date(1975,3,20)
        }
    },{
        "Other": {
            "Birth":  new Date(1975,3,20)
        }
    },{
        "Other": {
            "Death":  new Date(2090,3,20)
        }
    } ]
};

test('cast Birth and Death String to Date', () => {
    expect(retype(json,model)).toEqual(result);
});