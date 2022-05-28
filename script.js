let counter1 = 1;
let counter2 = 1;
let price1 = 54.99;
let price2 = 74.99;
let total = price1 + price2 + 19;
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const value = document.querySelector(".value1");
const value2 = document.querySelector(".value2");
const total1 = document.querySelector(".total1");

plus[0].addEventListener("click", () => {
  plus[0].querySelectorAll(".plus");
  value.innerHTML = ++counter1;
  total += price1;
  total1.innerHTML = total.toFixed(2);
});
minus[0].addEventListener("click", () => {
  minus[0].querySelectorAll(".minus");
  if (value.innerHTML >= 2) {
    value.innerHTML = --counter1;
    total -= price1;
    total1.innerHTML = total.toFixed(2);
  }
});
plus[1].addEventListener("click", () => {
  plus[1].querySelectorAll(".plus");
  value2.innerHTML = ++counter2;
  total += price2;
  total1.innerHTML = total.toFixed(2);
});
minus[1].addEventListener("click", () => {
  minus[1].querySelectorAll(".minus");
  if (value2.innerHTML >= 2) {
    value2.innerHTML = --counter2;
    total -= price2;
    total1.innerHTML = total.toFixed(2);
  }
});

const item1 = document.querySelector(".item1");
const remove1 = document.querySelector(".remove1");
remove1.addEventListener("click", () => {
  item1.style.display = "none";
  total = total - price1 * counter1;
  total1.innerHTML = total.toFixed(2);
});

const item2 = document.querySelector(".item2");
const remove2 = document.querySelector(".remove2");
remove2.addEventListener("click", () => {
  item2.style.display = "none";
  total = total - price2 * counter2;
  total1.innerHTML = total.toFixed(2);
});
