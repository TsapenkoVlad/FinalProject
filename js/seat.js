const changeSeats = (seat) => {
    if (localStorage.getItem('seat') !== null && localStorage.getItem('seat').length > 0) {
        localStorage.removeItem('seat');
    }
    localStorage.setItem('seat', seat);
}