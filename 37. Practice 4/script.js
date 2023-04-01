"use strict";

const personalMovieDB = {
    'count': 0,
    'movies': {},
    'actors': {},
    'genres': [],
    'private': false,

    start: function() {
        personalMovieDB.count = +prompt("How many films have you seen so far?", "").trim();
        while (personalMovieDB.count == '' || 
               personalMovieDB.count == null || 
               isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you seen so far?", "");
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i <= 2; i++) {
            const lastFilm = prompt("What was the last film?", "").trim(),
                  lastFilmRank = prompt("Rank your last film?", "").trim();
            
            if (lastFilm === null || 
                lastFilm.length >= 50 || 
                lastFilmRank === null || 
                lastFilmRank >= 50 || 
                lastFilm === '' || 
                lastFilmRank === '') {
                    i--;
                    continue;
            }
            personalMovieDB['movies'][lastFilm] = lastFilmRank;
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count > 30) {
            console.log("You're киноман.");
        } else if (personalMovieDB.count >= 10) {
            console.log("You are tipical viewer.")
        } else {
            console.log("Very few films (")
        }
    },

    showMyDB: function() {
        if (personalMovieDB.private == false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let answer = prompt(`Your favourite film genre ${i}`, "");
            if ( typeof(answer) !== 'string' || answer.trim() === '') {
                i--; 
            } else {
                personalMovieDB.genres[i - 1] = answer.trim();
            }
        }
        personalMovieDB.genres.forEach(function(item, index) {
            console.log(`Любимый жанр ${index} - это ${item}`);
        })
    },

    toggleVisibleMyDB: function() {
        personalMovieDB.private = !personalMovieDB.private;
    }
}

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();