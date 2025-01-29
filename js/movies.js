function displayMovies(movieCollection) {
    const movieGrid = document.getElementById('movie-grid');
    movieGrid.innerHTML = '';

    movieCollection.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'card';
        
        movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.name}" class="poster">
                <div class="overview">
                    <p>Release Year: ${movie.year}</p> 
                    <p class="genre">Genre: ${movie.genre}</p>
                    <p class="description">${movie.overview}</p>
                </div>
                <h3 class="movie-title">${movie.name}</h3>
        `;
        movieGrid.appendChild(movieDiv);
    });
}