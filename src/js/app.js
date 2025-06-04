"use strict"
let omdbApi = []
let tmdbApi = []

 
 window.onload = () => {
    
getomdbInfo()
getTmdbInfo()
    }


async function getomdbInfo()  {
try {

const resp = await fetch ("http://www.omdbapi.com/?apikey=af2e962d&s=halloween&type=movie")


if(!resp.ok) {
 throw new error("Något blev fel...")
    
 }

omdbApi = await resp.json();




 }catch(error) {
 console.error(error); }
 


 
 
 omdbPrint()
}

async function getTmdbInfo()  {
try {

const resp = await fetch ("https://api.themoviedb.org/3/find/tt0373883?api_key=fa8cacdbe62cd2d074a8b93d76318ddd&external_source=imdb_id")


if(!resp.ok) {
 throw new error("Något blev fel...")
    
 }

tmdbApi = await resp.json();

let test = tmdbApi
console.log(test);


 }catch(error) {
 console.error(error); }
 


 
 
 
}





function omdbPrint(){
let movieImageEl = omdbApi


const filterMoviesImages = movieImageEl.Search.filter(movie => movie.imdbID !=='tt10682266' )
console.log(movieImageEl.Search[0].Title );

console.log(filterMoviesImages );

let scrollEl = document.querySelector(".scroller");

filterMoviesImages.forEach(moviePoster => {

let imgEl = document.createElement("img")  
imgEl.src = moviePoster.Poster
imgEl.alt = moviePoster.Title
imgEl.id = moviePoster.imdbID 
imgEl.classList.add("posterImg")
scrollEl.appendChild(imgEl)


})

}