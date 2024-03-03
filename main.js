const lengthValShow = document.getElementById('lengthValue');
const lengthInput = document.getElementById('passLengthValue');
const display = document.getElementById('password');
const button = document.getElementById('btn');

function lengthShow() {
  lengthValShow.innerHTML = lengthInput.value;
}

setInterval(lengthShow, 10);

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = lowerCase.toUpperCase();
const number = '0123456789';
const symble = '!@#$%^&*()_+-=[]{};\':"\\|,.<>/?';

const upperCaseInput = document.getElementById('uppercase');
const lowerCaseInput = document.getElementById('lowercase');
const numberInput = document.getElementById('number');
const symbleInput = document.getElementById('symble');

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const passwordGenerate = (password = '') => {
  if (upperCaseInput.clicked) {
    password += getRandomData(upperCase);
  }

  console.log(password);
};

button.addEventListener('click', function () {
  generatePassword();
});
