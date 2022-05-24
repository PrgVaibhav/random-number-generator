const number = document.querySelector('.number');
const btn = document.querySelector('.btn');

const randomNumber = function () {
  const rNumber = Math.trunc(Math.random() * 100 + 1);
  return rNumber;
};

btn.addEventListener('click', function () {
  number.textContent = randomNumber();
});
