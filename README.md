# retypejs
 Middle to parse through model strings for types.

## Installation
$ npm install [retypejs](https://github.com/jeanpuga/retypejs) --save

```javascript
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

{
    "Id": "1111",
    "Birth": "1975-04-20T03:00:00.000Z",
    "Value": 43242.33,
    "Other": {
        "Birth": "1975-04-20T03:00:00.000Z",
        "Begin": "1975-04-20T11:00:18.000Z",
        "End": "1975-04-20T23:00:18.000Z",
        "Value": 123.123,
        "Quantity": 123
    },
    "Others": [{
        "Other": {
            "Birth": "1975-04-20T03:00:00.000Z",
            "Begin": "1975-04-20T21:46:18.000Z",
            "End": "1975-04-20T14:30:38.000Z",
            "Value": 43242.33,
            "Quantity": 43242
        }
    }]
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License
[MIT](https://choosealicense.com/licenses/mit/)

