/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Logan",
            "Justice League",
            "La-la land",
            "Whiplash",
            "Amazing Spider-Man"
        ]
    };
    
    const promoBlock = document.querySelector(".promo__adv"),
          poster = document.querySelector(".promo__content"),
          movieListBlock = document.querySelector(".promo__interactive-list"),
          movieAddBlock = document.querySelector("form.add");


    // All functions
    function removeAds() {
        const ads = promoBlock.querySelectorAll("img[alt='some picture']");
        ads.forEach((item) => {
            item.remove();
        })
    };

    function editPosterInfo() {
        const genre = poster.querySelector(".promo__genre"),
              background = poster.querySelector(".promo__bg");

        background.style.backgroundImage = "url('img/bg.jpg')";
        genre.textContent = "ДРАМА";
    }

    function displayMovieDB(targetPlace, movieList) {

        movieList = movieList.sort();
        targetPlace.innerHTML = '';

        movieList.forEach((movie, index) => {
            targetPlace.innerHTML += `
                <li class="promo__interactive-item">${index + 1} ${movie.toUpperCase()}
                <div class="delete"></div>
                </li>
            `;
        })

        // Adding event listener for "delete" button
        const deleteBtns = targetPlace.querySelectorAll(".delete");
        deleteBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                movieList.splice(index, 1);
                console.log(movieList);
                displayMovieDB(targetPlace, movieList);
            })  
        })
    }

    function addMovie(targetBlock, movieList) {
        const addField = targetBlock.querySelector("input.adding__input"),
              checkbox = targetBlock.querySelector('input[type="checkbox"');

        targetBlock.addEventListener('submit', (event) => {
            event.preventDefault();

            let newMovieName = addField.value.trim().toUpperCase();

            if (newMovieName) {

                if (newMovieName.length > 21) newMovieName = `${newMovieName.slice(0,21)}...`;
                movieList.push(newMovieName);
                displayMovieDB(movieListBlock, movieList);
            }

            if (checkbox.checked) console.log("Adding favourite movie.");
            addField.value = '';
        })

    }


    // Function calls
    removeAds();
    editPosterInfo();
    displayMovieDB(movieListBlock, movieDB.movies);
    addMovie(movieAddBlock, movieDB.movies);
})



