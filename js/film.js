(function ($) {
    "use strict";
    let filmModule = function () {
        let filmChange = undefined;
        let filmData = undefined;
        let init = function () {
        };
        init();
    };
    filmModule();
})(jQuery);



const changeFilms = (id) => {
    const films = document.getElementById(id);
    if (localStorage.getItem('films') !== null && localStorage.getItem('films').length > 0) {
        localStorage.removeItem('films');
    }
    localStorage.setItem('films', films.innerText);
};

