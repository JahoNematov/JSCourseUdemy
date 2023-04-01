"use strict";

const numberOfFilms = +prompt("How many films have you seen so far?", "");

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'private': false
}

for (let i = 0; i <= 2; i++) {
    const lastFilm = prompt("What was the last film?", ""),
          lastFilmRank = prompt("Rank your last film?", "");
    
    if (lastFilm === null || lastFilm.length >= 50 || lastFilmRank === null || lastFilmRank >= 50
        || lastFilm === '' || lastFilmRank === '') {
        i--;
        continue;
    }
    personalMovieDB['movies'][lastFilm] = lastFilmRank;
}

console.log(personalMovieDB);

if (personalMovieDB.count > 30) {
    console.log("You're киноман.");
} else if (personalMovieDB.count >= 10) {
    console.log("You are tipical viewer.")
} else {
    console.log("Very few films (")
}