const changeFilms = (id) => {
    const films = document.getElementById(id);
    if (
      localStorage.getItem("films") !== null &&
      localStorage.getItem("films").length > 0
    ) {
      localStorage.removeItem("films");
    }
    if (films !== null) {
      localStorage.setItem("films", films.innerText);
    }
  };
  