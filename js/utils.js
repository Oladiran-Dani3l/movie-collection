document.addEventListener("DOMContentLoaded", () => {
    const genreFilter = document.getElementById("genre-filter");
    const movies = document.querySelectorAll(".movie");
  
    genreFilter.addEventListener("input", () => {
      const filterValue = genreFilter.value.toLowerCase();
  
      movies.forEach((movie) => {
        const genres = movie.querySelector(".genre").textContent.toLowerCase();
  
        if (genres.includes(filterValue)) {
          movie.style.display = "block"; // Show the movie
        } else {
          movie.style.display = "none"; // Hide the movie
        }
      });
    });
  });


//   function filterMovies() {
//     const filterValue = document.getElementById('genre-filter').value.toLowerCase();

//     const filteredMovies = allMovies.filter(movie =>
//         movie.genre.some(g => g.toLowerCase().includes(filterValue))
//     );

//     displayMovies(filteredMovies);

//   }