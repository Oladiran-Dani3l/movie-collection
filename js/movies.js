function displayMovies(movies) {
    const movieGrid = document.getElementById("movie-grid");
    movieGrid.innerHTML = ""; // Clear previous results

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.name}" class="poster">
            <div class="overview">
                <p>Release Year: ${movie.year}</p> 
                <p class="genre">Genre: ${movie.genre.join(", ")}</p>
                <p class="description">${movie.overview}</p>
            </div>
            <h3 class="movie-title">${movie.name}</h3>
        `;

        movieGrid.appendChild(movieElement);
    });
}