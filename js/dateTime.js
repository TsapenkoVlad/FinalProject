const changeDates = (id) => {
    let previousId = null;
    if (localStorage.getItem('date') !== null && localStorage.getItem('date').length > 0) {
       previousId = localStorage.getItem('date');
        localStorage.removeItem('date');
    }
    removeColor(previousId);
    
    localStorage.setItem('date', id);

   changeColor(id)
   
};


const changeTime = (id) => {
    if (localStorage.getItem('time') !== null && localStorage.getItem('time').length > 0) {
        localStorage.removeItem('time');
    }
    localStorage.setItem('time', id);
};

const changeColor = (id) => {
    let dateButton = document.getElementById(id)
    dateButton.style.backgroundColor = "rgb(65, 142, 209)";
    dateButton.style.color = "#fff"; 
} 

const removeColor = (previousId) => {
    if(previousId !== null) {
    let previousButton = document.getElementById(previousId);
    previousButton.style.backgroundColor = "#ffff";
    previousButton.style.color = "#2299ff";
}
}