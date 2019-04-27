const { ModuleMap } = require('jest-haste-map');

const toDateTime = function (culture="pt-br") {
    if(culture==="pt-br"){
        const [date, time] = this.split(" ")
        const [day, month, year] = date.split("/")
        const [hour, minute, second] = time.split(":")
        return new Date(year, month - 1, day, hour, minute, second)
    }
}

const toDate = function (culture="pt-br") {
    if(culture==="pt-br"){
        const [day, month, year] = this.split("/")
        return new Date(year, month - 1, day)
    }
}

const toDecimal = function () {
    return parseFloat(this.replace(",", "."))
};

const toInt = function () {
    return parseInt(this)
}

String.prototype.toDecimal = toDecimal;
String.prototype.toDate = toDate;
String.prototype.toDateTime = toDateTime;
String.prototype.toInt = toInt;

const  retype = (obj, model) => 
        Object
            .keys(obj)
            .filter(key => !Object.keys(model).some(removed => removed === key && model[key] === 'Remove'))
            .map(key => ({
                    key,
                    value: 
                            Array.isArray(obj[key])?
                            obj[key].map(item=>retype(item, model)):
                            typeof obj[key] === 'object' ? 
                            retype(obj[key], model) : 
                            (!!model[key] ? obj[key][`to${model[key]}`]() : obj[key])
                }))
            .reduce((obj, {
                key,
                value
            }) => obj = {
                ...obj,
                [key]: value
            }, {});

module.exports = retype;
