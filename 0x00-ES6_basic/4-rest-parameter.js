// 4-rest-parameter.js
export default function returnHowManyArguments(...rest) {
    return rest.length;
}