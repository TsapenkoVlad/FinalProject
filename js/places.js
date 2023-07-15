const placeFilms = (id) => {
    if (localStorage.getItem('date') !== null && localStorage.getItem('date').length > 0) {
        localStorage.removeItem('date');
    }
    localStorage.setItem('date', id);

};
