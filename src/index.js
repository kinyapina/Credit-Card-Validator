import './style.css';

const form = document.querySelector('.card-widget');
const input = document.querySelector('.input-card-number');
const btn = document.querySelector('.btn');
let value;

let reg = /^[0-9\s]*$/;

btn.onclick = (event) => {
  event.preventDefault;
  value = input.value;

  if (!isValid(reg, input.value)) {
    alert('Номер карты должен состоять из цифр!');
  }

  if (!checkLuhn()) {
    alert('Такого номера карты не существует!')
  } else {
    alert('Номер карты прошел проверку')
  };

  checkCardType(value);
}

export function isValid(regex, input) {
  return regex.test(input);
}

export function checkLuhn() {
  let sum = 0;
  const parity = (value.length) % 2;
  for (let i = 0; i < value.length; i++) {
    let digit = Number(value[i]);
    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return Number(sum % 10) === 0;
}

export function checkCardType(num) {
  if (num.match(/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/)) {
    return alert('MasterCard');
  } else if (num.match(/^4[0-9]{0,}$/) || num.match(/^4\d{12}/)) {
    return alert('Visa');
  } else if (num.match(/^(5[06789]|6)[0-9]{0,}$/) || num.match(/^4\d{12}/)) {
    return alert('Maestro');
  }
}
