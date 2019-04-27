const retype = require('../index.js');

const model = {
    "Inutil": "Remove",
};

let json = {
    "Id": "1111",
    "Inutil": "20/04/1975",
    "Other": {
        "Birth": "20/04/1975",
        "Inutil": "20/04/1975"
    },
    "Others": [{
        "Other": {
            "Birth": "20/04/1975"
        }
    },{
        "Other": {
            "Inutil": "20/04/1975"
        }
    },{
        "Other": {
            "Death": "20/04/2090",
            "Inutil": "20/04/1975"
        }
    } ]
};

let result = {
    "Id": "1111",
    "Other": {
        "Birth": "20/04/1975",
    },
    "Others": [{
        "Other": {
            "Birth": "20/04/1975"
        }
    },{
        "Other": {
        }
    },{
        "Other": {
            "Death": "20/04/2090",
        }
    } ]
};


test('remove Inutil', () => {
    expect(retype(json,model)).toEqual(result);
});