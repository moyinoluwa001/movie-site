
// first api
const apiKey = '801c681f9fd380835fcfc66c8ad2d35d';
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    // document.getElementById('movies').innerHTML = data.results.length + "movies collections"
   
  const movies = data.results.slice(0, 1);
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
    moviePoster.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
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
.catch(error => {
  console.error('Error fetching movies:', error);
});
// end of first api
// second api 
const allContainer = document.querySelector('.all-container')
const allMovies = document.querySelector('.moviehead')
const filteredMovies = document.querySelector('.filtered-movies')
const searchBox = document.querySelector(".searchbox");
const showError = document.querySelector('.error')


const Key = '801c681f9fd380835fcfc66c8ad2d35d';
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    const movies = data.results;
    const movieContainer = document.querySelector('.moviehead');
    
    movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movieCards');

    const Poster = document.createElement('img');
    Poster.classList.add('Poster');
    Poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    Poster.alt = movie.title;
    const movieTitle = document.createElement('h5');
    movieTitle.classList.add('movieTitle');
    movieTitle.innerText = movie.title;


    Poster.alt = movie.overview;
    const  movieoverview = document.createElement('p');
    movieoverview.classList.add('movieoverview');
    movieoverview.innerText = movie.overview.slice(0,38) ;

    //  document.createElement('div').innerHTML = "<i>class="fa fa-star"></i>";
    // icon.classList.add('fa fa-like');

    
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

    movieCard.appendChild(Poster);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(rating);
    movieCard.appendChild(movieoverview);

    movieContainer.appendChild(movieCard);
  });
  

})   
.catch(error => {
  console.error('Error fetching movies:', error);
})
// second api

// search movies page using filter
const form = document.querySelector('.search-btn');
const movieCon = document.querySelector('.moviehead');
const input = form.querySelector('input');
const searchResults = document.querySelector('.search-result');
const searchResultContainer = document.querySelector('.searchResultContainer');


form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value;
  const api = '801c681f9fd380835fcfc66c8ad2d35d'; // replace with your actual API key
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${query}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const movies = data.results;

    searchResults.innerHTML = '';
    movieCon.innerHTML = '';


    movies.forEach((movie) => {
      const { poster_path, title, release_date, vote_average } = movie;

      const moviehead = document.createElement('div');
      moviehead.classList.add('movieCard');

      const posterUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+poster';

      moviehead.innerHTML = `
        <img src="${posterUrl}" alt="${title}" class="moviePoster" height:40px;>
        <div class="movieTitle">${title}</div>
        
        <div class="rating">
          <span class="rate">${vote_average}</span>
          <span class="year">${release_date ? release_date.slice(0, 4) : ''}</span>
        </div>
      `;

      searchResults.appendChild(moviehead);
    });

    const header = searchResultContainer.querySelector('header');
    if (!header) {
      const header = document.createElement('header');
      header.innerHTML = `<h1>Search Results: ${query}</h1>`;

      searchResultContainer.insertBefore(header, searchResults);
    } else {
      header.innerHTML = `<h1>Search Results: ${query}</h1>`;
    }
  } catch (error) {
    console.error(error);
  }

});
// end of search movie page


// const movieinput = document.getElementById('put')
// const movieresult = document.getElementById("result")
// function myfunction(){
//   const Key = '801c681f9fd380835fcfc66c8ad2d35d';
//   fetch(`https://api.themoviedb.org/3/search?q=${movieinput.value}apikey=${Key}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
// });

// }






 