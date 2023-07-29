$(document).ready(function () {
  setDate();
  setDayOfWeek();
});
const changeDates = (id) => {
  let previousId = null;
  if (
    localStorage.getItem("date") !== null &&
    localStorage.getItem("date").length > 0
  ) {
    previousId = localStorage.getItem("date");
    localStorage.removeItem("date");
  }
  removeColor(previousId);

  localStorage.setItem("date", id);

  changeColor(id);
};

const changeTime = (id) => {
  if (
    localStorage.getItem("time") !== null &&
    localStorage.getItem("time").length > 0
  ) {
    localStorage.removeItem("time");
  }
  localStorage.setItem("time", id);
  const timeButton = document.getElementById(id);
  timeButton.style.backgroundColor = "white";
  timeButton.style.color = "black";
};

const changeColor = (id) => {
  let dateButton = document.getElementById(id);
  dateButton.style.backgroundColor = "rgb(65, 142, 209)";
  dateButton.style.color = "#fff";
};

const removeColor = (previousId) => {
  if (previousId !== null) {
    let previousButton = document.getElementById(previousId);
    previousButton.style.backgroundColor = "#ffff";
    previousButton.style.color = "#2299ff";
  }
};

const setDate = () => {
  for (let i = 1; i <= 7; i++) {
    const targetDate = new Date();
    const day = targetDate.getDate() + i - 1;
    document.getElementById(i.toString()).textContent = day;
  }
};

const setDayOfWeek = () => {
  const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  for (let i = 0; i < 7; i++) {
    const targetDate = new Date();
    const dayOfWeek = daysOfWeek[(targetDate.getDay() + i - 1) % 7];
    document.getElementById("0" + (i + 1).toString()).textContent = dayOfWeek;
  }
};
