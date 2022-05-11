const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "" );


const questionOfFilms = prompt("Один из последних просмотреных фильмов?", "" );
const scoreOfFilms = prompt("На сколько оцените его ? ", "" );


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

personalMovieDB.movies[questionOfFilms] = scoreOfFilms;

console.log(personalMovieDB);