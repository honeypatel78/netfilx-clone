// JavaScript code for dark mode toggle and dynamic content

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Add event listener to dark mode toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Function to create a content row
function createContentRow(title, movies) {
    const contentRow = document.createElement('div');
    contentRow.className = 'content-row';

    const rowTitle = document.createElement('h2');
    rowTitle.textContent = title;
    contentRow.appendChild(rowTitle);

    const rowInner = document.createElement('div');
    rowInner.className = 'content-row__inner';

    movies.forEach(movie => {
        const img = document.createElement('img');
        img.src = movie.poster;
        img.alt = movie.title;
        rowInner.appendChild(img);
    });

    contentRow.appendChild(rowInner);
    return contentRow;
}

// Function to generate random movies
function generateRandomMovies(count) {
    const movies = [];
    for (let i = 0; i < count; i++) {
        movies.push({
            title: `Movie ${i + 1}`,
            poster: `https://via.placeholder.com/150?text=Movie+${i + 1}`,
            rating: Math.random() * 10
        });
    }
    return movies;
}

// Function to calculate the sum of ratings
function calculateRatingSum(movies) {
    return movies.reduce((sum, movie) => sum + movie.rating, 0);
}

// Add dynamic content rows to the main section
function populateContent() {
    const mainContent = document.querySelector('.main .content');
    const trendingMovies = generateRandomMovies(5);
    const topPicksMovies = generateRandomMovies(5);

    mainContent.appendChild(createContentRow('Trending Now', trendingMovies));
    mainContent.appendChild(createContentRow('Top Picks for You', topPicksMovies));

    const totalRatingSum = calculateRatingSum(trendingMovies) + calculateRatingSum(topPicksMovies);
    document.getElementById('rating-sum').textContent = totalRatingSum.toFixed(1);
}

// Call populateContent to generate and display random movies
populateContent();
