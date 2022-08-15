"use strict";

const inputBill = document.querySelector(".input-bill");
const inputPeople = document.querySelector(".input-people");
const resetBtn = document.querySelector(".reset-btn");

const percent5 = document.querySelector(".percent-5");
const percent10 = document.querySelector(".percent-10");
const percent15 = document.querySelector(".percent-15");
const percent25 = document.querySelector(".percent-25");
const percent50 = document.querySelector(".percent-50");
const customPercent = document.querySelector(".custom-percent");

const tipPP = document.querySelector(".tip-amount-pp");
const totalPP = document.querySelector(".total-pp");

const five = function () {
  if (inputPeople.value === "" || inputBill.value === "") {
    alert("Can't be blank 🔴");
  } else {
    let percentOfNumber = (5 / 100) * inputBill.value;
    let tipPerPerson = percentOfNumber / inputPeople.value;
    tipPP.textContent = tipPerPerson.toFixed(2);
    let totalPrice = Number(inputBill.value) + Number(percentOfNumber);
    totalPP.textContent = (totalPrice / inputPeople.value).toFixed(2);
    resetBtn.classList.remove("opacity-20");
    addReset();
  }
};

const teen = function () {
  if (inputPeople.value === "" || inputBill.value === "") {
    alert("Can't be blank 🔴");
  } else {
    let percentOfNumber = (10 / 100) * inputBill.value;
    let tipPerPerson = percentOfNumber / inputPeople.value;
    tipPP.textContent = tipPerPerson.toFixed(2);
    let totalPrice = Number(inputBill.value) + Number(percentOfNumber);
    totalPP.textContent = (totalPrice / inputPeople.value).toFixed(2);
    resetBtn.classList.remove("opacity-20");
    addReset();
  }
};

const fifteen = function () {
  if (inputPeople.value === "" || inputBill.value === "") {
    alert("Can't be blank 🔴");
  } else {
    let percentOfNumber = (15 / 100) * inputBill.value;
    let tipPerPerson = percentOfNumber / inputPeople.value;
    tipPP.textContent = tipPerPerson.toFixed(2);
    let totalPrice = Number(inputBill.value) + Number(percentOfNumber);
    totalPP.textContent = (totalPrice / inputPeople.value).toFixed(2);
    resetBtn.classList.remove("opacity-20");
    addReset();
  }
};

const twentyfive = function () {
  if (inputPeople.value === "" || inputBill.value === "") {
    alert("Can't be blank 🔴");
  } else {
    let percentOfNumber = (25 / 100) * inputBill.value;
    let tipPerPerson = percentOfNumber / inputPeople.value;
    tipPP.textContent = tipPerPerson.toFixed(2);
    let totalPrice = Number(inputBill.value) + Number(percentOfNumber);
    totalPP.textContent = (totalPrice / inputPeople.value).toFixed(2);
    resetBtn.classList.remove("opacity-20");
    addReset();
  }
};

const fifty = function () {
  if (inputPeople.value === "" || inputBill.value === "") {
    alert("Can't be blank 🔴");
  } else {
    let percentOfNumber = (50 / 100) * inputBill.value;
    let tipPerPerson = percentOfNumber / inputPeople.value;
    tipPP.textContent = tipPerPerson.toFixed(2);
    let totalPrice = Number(inputBill.value) + Number(percentOfNumber);
    totalPP.textContent = (totalPrice / inputPeople.value).toFixed(2);
    resetBtn.classList.remove("opacity-20");
    addReset();
  }
};

const custom = function () {
  if (inputPeople.value === "" || inputBill.value === "") {
    alert("Can't be blank 🔴");
  } else {
    let percentOfNumber = (customPercent.value / 100) * inputBill.value;
    let tipPerPerson = percentOfNumber / inputPeople.value;
    tipPP.textContent = tipPerPerson.toFixed(2);
    let totalPrice = Number(inputBill.value) + Number(percentOfNumber);
    totalPP.textContent = (totalPrice / inputPeople.value).toFixed(2);
    resetBtn.classList.remove("opacity-20");
    addReset();
  }
};

percent5.addEventListener("click", five);
percent10.addEventListener("click", teen);
percent15.addEventListener("click", fifteen);
percent25.addEventListener("click", twentyfive);
percent50.addEventListener("click", fifty);
customPercent.addEventListener("click", custom);

const addReset = function () {
  resetBtn.addEventListener("click", function () {
    window.location.reload();
  });
};
