/**
 *
 * false / Falsy:
 * 0
 * "", '', ``
 * NaN
 * null / undefined
 */

const colorMember = null;
const colorDefault = "Red";

console.log(colorMember ?? colorDefault);
console.log(colorMember || colorDefault);
console.log(colorMember && colorDefault);
