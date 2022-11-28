const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentMonth = document.querySelector('.month h4');
const currentDate = document.querySelector('.header-date p');
const monthDays = document.querySelector('.dates-inner')
const lastDays = new Date(date.getFullYear(), date.getMonth() - 1, 0).getDate();
const preLastDay = new Date(date.getFullYear(), date.getMonth() - 2, 0).getDate();
const firstDayIndex = new Date(date.getFullYear(), date.getMonth() - 2, 0).getDate();
console.log(preLastDay)
let days = "";

currentMonth.innerText = months[date.getMonth()];
currentDate.innerText = date.toDateString();
for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="date prev-date">${preLastDay-x}</div>`;
}
for (let i = 1; i <= lastDays; i++) {
    days += `<div class="date">${i}</div>`;
    monthDays.innerHTML = days;
}