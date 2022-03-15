// process.stdout.write('\x07'); // sound
let args = process.argv.slice(2);
console.log(args);


// create a timer that beeps when 
//  const timer = function(args){
//   if (args <= 0) {
//     return
//   };
// let delay = 0;
//   for (let i = 0; i < args.length; i++) {
//     setTimeout(() => {
//       process.stdout.write('\x07')}, delay += 1000);
//   }
// };

//timer(args);
let checkNumber;
if (args.length === 0) {
  console.log('args is empty')
  process.exit();
};

for (let element of args) {
  checkNumber = Number(element);
  console.log(checkNumber);
  if (checkNumber >= 0 && !isNaN(checkNumber)) {
    setTimeout (() => {
      process.stdout.write('\x07')}, 1000 * element)
  }
}