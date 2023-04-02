/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Iron Man",
        "Justice League",
        "Amazing Spider Man",
        "Sherlock",
        "Peaky Blinders"
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
const movieList = document.querySelectorAll(".promo__interactive-item");
const movies = movieDB.movies.sort();
movieList.forEach((item, index) => {
    // item.insertAdjacentHTML('afterbegin', movies[index]);
    item.innerHTML = `
        ${(index + 1)}. ${movies[index]}
        <div class="delete"></div>
    `;
})
