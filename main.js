let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symb = '!@#$%^&*()_+-=[]{};\':"\\|,.<>/?';

let upp,
  low,
  num,
  sym = true;
true;
true;
true;

let all = '';

if (upp) {
  all += upperCase;
}
if (low) {
  all += lowerCase;
}
if (num) {
  all += numbers;
}
if (sym) {
  all += Symbol;
}

let length = 16;
let amount = 10;

let password;
for (let i = 0; i < amount; i++) {
  password = all.Math.floor(Math.random() * length.length);
}

console.log(password);

// console.log(all);
