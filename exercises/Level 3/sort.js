const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 }
];

function sort(movies, year, rating) {
    return output = movies
        .filter((movie) => movie.year === year && movie.rating > rating)
        .sort((movie1, movie2) => movie2.rating - movie1.rating)
        .map(movie => movie.title);
}

console.log(sort(movies, 2018, 4));