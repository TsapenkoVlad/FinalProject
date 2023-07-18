const changeSeats = (seat) => {
    if (localStorage.getItem('seat') !== null && localStorage.getItem('seat').length > 0) {
        localStorage.removeItem('seat');
    }
    localStorage.setItem('seat', seat);
}
const openButton = document.getElementById('openButton');
openButton.addEventListener('click', () => {
    window.location.href = '/FinalProject/tickets/tickets.html';
});