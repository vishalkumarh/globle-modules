// console.log('starting note app');
// console.log(module);
// module.exports.age = 25;
// module.exports.addNote = function () {
//     console.log('Adding Note');
// return 'New Note'; // Returning a string
// }
// module.exports.add = (a,b)=> {
//    console.log('Adding Note');
// return a+b; // Returning a string
// }

//----------MODULES-------------
console.log(module.filename);//notes.js;
console.log(module.children);//[];
console.log(module.parent);//null;
console.log(module.id);//".";
console.log(module.loaded);//false;
console.log(module.paths);//c:\\notes_node\\node_modules;
//-------------------------------
const _ = require('lodash');
{
  var array = [1,2,3];
  //Converts value to a string.
  console.log(_.toString(array));//'1,2,3';
}

{
var a=6;
var b=20;
console.log(_.add(a, b));//adds the two variables(6+20=26).
}

console.log(_.floor(0.046,2));//0.04;

{
var x = 'VishalKumar';
console.log(_.snakeCase(x));//vishal_kumar;
// which the elements are separated with one underscore character (_) and no spaces
}

{
console.log(_.split('a-b-c', '-', 2));//['a','b'];
//Splits string by separator.
}

{
  var name = ['  vishalkumar  '];
  //removes leading and trailing whitespaces.
  console.log(_.trim(name));//'vishalkumar';
}
