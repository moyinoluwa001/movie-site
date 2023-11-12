const apiKey = '801c681f9fd380835fcfc66c8ad2d35d';
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    // document.getElementById('movies').innerHTML = data.results.length + "movies collections"
   
  const movies = data.results.slice(10, 15);
  if (movies.length > 0){
}
 else{
    movies.innerhtml="no movies found."
  }
  
const movieContainer = document.querySelector('.movieContainer');
movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movieCard');

    const moviePoster = document.createElement('img');
    moviePoster.classList.add('moviePoster');
    moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    moviePoster.alt = movie.title;
    const movieTitle = document.createElement('h4');
    movieTitle.classList.add('movieTitle');
    movieTitle.innerText = movie.title;


    moviePoster.alt = movie.overview;
    const  movieoverview = document.createElement('h6');
    movieoverview.classList.add('movieoverview');
    movieoverview.innerText = movie.overview.slice(0,58) ;

    
    const rating = document.createElement('p');
    rating.classList.add('rating');
   
    

    const rate = document.createElement('span');
    rate.classList.add('rate');
    rate.innerText = `${movie.vote_average}/10`;

    const year = document.createElement('span');
    year.classList.add('year');
    year.innerText = movie.release_date.split('-')[0];

    rating.appendChild(rate);
    rating.appendChild(year);

    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(rating);
    movieCard.appendChild(movieoverview);

    movieContainer.appendChild(movieCard);
  });
  

})
.catch(error => {console.error('Error fetching movies:', error);
});