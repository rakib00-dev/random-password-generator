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

const upperCaseInput = document.getElementById('upperCase');
const lowerCaseInput = document.getElementById('lowerCase');
const numberInput = document.getElementById('number');
const symbleInput = document.getElementById('symble');

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const passwordGenerate = (password = '') => {
  if (upperCaseInput.checked) {
    password += getRandomData(upperCase);
  }
  if (lowerCaseInput.checked) {
    password += getRandomData(lowerCase);
  }
  if (numberInput.checked) {
    password += getRandomData(number);
  }
  if (symbleInput.checked) {
    password += getRandomData(symble);
  }

  if (password.length < lengthInput.value) {
    return passwordGenerate(password);
  }

  document.getElementById('password').value = truncateString(
    password,
    lengthInput.value
  );
  console.log(password);
};

button.addEventListener('click', () => {
  passwordGenerate();
});

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}
