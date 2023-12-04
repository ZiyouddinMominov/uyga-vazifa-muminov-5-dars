
// UYGA VAZIFA 1 - TAYYOR
// let n = +prompt("Birinchi sonni kiriting");
// let res;
// for (let i = n; i >= 1; i -= 2) {
//   if (i % 2 == 1) {
//     res = "Qiziqarli";
//   } else {
//     res = "Qiziqarli emas";
//   }
// }
// console.log(res);
// UYGA VAZIFA 2 - TAYYOR
// let n = 10;
// let son1 = 1;
// for (let i = n; i >= 1; i -= 3) {
//   son1 *= i;
// }

// console.log(son1);
// UYGA VAZIFA 3 - TAYYOR
// let a = 1;
// let b = 10;
// let son1 = 1;
// for (let i = a; i <= b; i += 3) {
//   son1 *= i;
// }

// console.log(son1);
// UYGA VAZIFA 4 - TAYYOR
// let a = 1;
// let b = 10;
// let son1 = 0;

// for (let i = a; i <= b; i++) {
//   if (i % 5 === 0 || i % 7 === 0) {
//     son1 += i;
//   }
// }

// console.log(son1);
// UYGA VAZIFA 5 - TAYYOR
// let a = 1;
// let b = 10;
// let son1 = 0;

// for (let i = a; i <= b; i++) {
//   if (i % 2 !== 0) {
//     son1 += i * i;
//   }
// }

// console.log(son1);
// UYGA VAZIFA 6 - TAYYOR
// let a = 1;
// let b = 10;
// let kopaytma = 1;

// for (let i = a; i <= b; i++) {
//   if (i % 2 === 0) {
//     kopaytma *= i * i * i;
//   }
// }

// console.log(kopaytma);
// UYGA VAZIFA 7 - TAYYOR
// let son = 12;
// console.log(`${son} ning bo'luvchilari:`);

// for (let i = 1; i <= son; i++) {
//   if (son % i === 0) {
//     console.log(i);
//   }
// }
// UYGA VAZIFA 8 - TAYYOR
// let son = 20;
// let son1 = [];

// console.log(`${son} ning bo'luvchilari:`);

// for (let i = 1; i <= son; i++) {
//   if (son % i === 0) {
//     son1.push(i);
//   }
// }

// console.log(son1);
// UYGA VAZIFA 9 - TAYYOR
// let son = 17;
// let tubmi = true;

// if (son <= 1) {
//   tubmi = false;
// } else {
//   for (let i = 2; i <= Math.sqrt(son); i++) {
//     if (son % i === 0) {
//       tubmi = false;
//       break;
//     }
//   }
// }

// if (tubmi) {
//   console.log(`${son} tub son.`);
// } else {
//   console.log(`${son} tub emas son.`);
// }
