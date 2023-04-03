/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
        
    const movieDB = {
        movies: [
            "Iron Man",
            "Justice League",
            "Amazing Spider Man",
            "Sherlock",
            "Peaky Blinders",
        ]
    };


    // 1)
    const advImgs = document.querySelectorAll(".promo__adv img");
    advImgs.forEach(item => {
        item.remove();
    });

    // 2)
    document.querySelector(".promo__genre").textContent = "ДРАМА";

    // 3)
    document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')";


    // 4)
    function displayMovieDB() {
        const movieList = document.querySelector(".promo__interactive-list");
        const movies = movieDB.movies.sort();
        

        movieList.innerHTML = "";
        movies.forEach((item, index) => {
            movieList.innerHTML += `
            <li class="promo__interactive-item">
                ${(index + 1)}. ${item}
                <div class="delete"></div>
            </li>`;
        })

        const deleteBtn = document.querySelectorAll('.delete');
        deleteBtn.forEach((item, index) => {
            item.addEventListener('click', (event) => {
                event.target.parentElement.remove();
                movieDB.movies.splice(index, 1);
                displayMovieDB();
            })
        })
        
    }
    displayMovieDB();


    // 5.1 and 5.2)
    const submitBtn = document.querySelector("button");
    const addField = document.querySelector('.adding__input');
    const checkbox = document.querySelectorAll('[type="checkbox"]');
    // Creating listener function
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        
        let movieName = addField.value.trim().toUpperCase();
        
        if (!movieName) {
            addField.value = "";
            return;
        };

        if (movieName.length > 21) {
            movieName = movieName.slice(0, 22) + '...';
        }

        // if (checkbox.checked) {
        //     console.log("Adding favourite film");
        // }

        movieDB.movies.push(movieName);
        addField.value = "";
        console.log(movieDB);
        displayMovieDB();
    });


    // 5.3)

})
