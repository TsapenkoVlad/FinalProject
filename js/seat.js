const changeSeats = (seat) => {
  if (
    localStorage.getItem("seat") !== null &&
    localStorage.getItem("seat").length > 0
  ) {
    localStorage.removeItem("seat");
  }
  localStorage.setItem("seat", seat);
  let seat3 = document.querySelector("#places");
  seat3.innerHTML = seat;
};
const openButton = document.getElementById("openButton");
openButton.addEventListener("click", () => {
  window.location.href = "../tickets/tickets.html";
});
let seatTicket = localStorage.getItem("seat");
