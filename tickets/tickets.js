let cityTicket = localStorage.getItem('city');
let city2 = document.querySelector('#city');
city2.innerHTML = cityTicket;

let timeTicket = localStorage.getItem('time');
let time2 = document.querySelector('#time');
time2.innerHTML = timeTicket;

let dateTicket = localStorage.getItem('date');
let date2 = document.querySelector('#date');
date2.innerHTML = dateTicket; 

let seatTicket = localStorage.getItem('seat');
let seat2 = document.querySelector('#seat');
seat2.innerHTML = seatTicket;

let filmsTicket = localStorage.getItem('films');
let films2 = document.querySelector('#films');
films2.innerHTML = filmsTicket;

const backPage = document.querySelector('.link')
backPage.addEventListener('click', () => {
    window.location.href = '/FinalProject/index.html';
});