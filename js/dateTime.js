const changeDates = (id) => {
    if (localStorage.getItem('date') !== null && localStorage.getItem('date').length > 0) {
        localStorage.removeItem('date');
    }
    localStorage.setItem('date', id);
};


const changeTime = (id) => {
    if (localStorage.getItem('time') !== null && localStorage.getItem('time').length > 0) {
        localStorage.removeItem('time');
    }
    localStorage.setItem('time', id);
};