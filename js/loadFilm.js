$(document).ready(function () {
    getFilm();
  });
  
  const getFilm = () => {
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");
    const film = FILMS[id];
    document.getElementById("title").innerText = film.title;
    document.getElementById("release").innerText = film.release;
    document.getElementById("duration").innerText = film.duration;
    document.getElementById("country").innerText = film.country;
    document.getElementById("description").innerText = film.description;
    document.getElementById("actors").innerText = film.actors;
    document.getElementById("genre").innerText = film.genre;
    document.getElementById("img").src = film.img;
  };
  
  const FILMS = [
    {},
    {
      title: "Астрал 5",
      release: "06.07.2023",
      duration: "2 год. 10 хв.",
      country: "США",
      description: `Нова частина успішної хорор-франшизи "Астрал" на великих екранах!`,
      actors: "Патрік Вілсон, Тай Сімпкінс",
      genre: "жахи",
      img: "../img/astral.webp",
    },
    { title: "Forsaz", description: "", time: "", actors: "", genre: "" },
    { title: "Forsaz", description: "", time: "", actors: "", genre: "" },
    { title: "Forsaz", description: "", time: "", actors: "", genre: "" },
    { title: "Forsaz", description: "", time: "", actors: "", genre: "" },
    { title: "Forsaz", description: "", time: "", actors: "", genre: "" },
    { title: "Forsaz", description: "", time: "", actors: "", genre: "" },
    { title: "Forsaz", description: "", time: "", actors: "", genre: "" },
  ];
  