const retype = require('retypejs');
 
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
    }]
};
 
let result = retype(json,model);
console.log(result);