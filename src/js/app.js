"use strict"
let omdbApi = []
let tmdbApi = []
let watchmodeApi = []
 
 window.onload = () => {
    
getomdbInfo()
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







function omdbPrint(){
let movieImageEl = omdbApi

const filterMoviesImages = movieImageEl.Search.filter(movie => movie.imdbID !='tt10682266')

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
imgEl.addEventListener("click", getTmdbInfo )
imgEl.addEventListener("click" , getWatchmodeInfo)
})

}


async function getTmdbInfo(event)  {

let findMovie = event.target.id

try {

const resp = await fetch (`https://api.themoviedb.org/3/find/${findMovie}?api_key=fa8cacdbe62cd2d074a8b93d76318ddd&external_source=imdb_id`)


if(!resp.ok) {
 throw new error("Något blev fel...")
    
 }

tmdbApi = await resp.json();




 }catch(error) {
 console.error(error); }
 
showMovieInfo()


}


async function getWatchmodeInfo(event)  {

let findMovieWatchmode = event.target.id

try {

const resp = await fetch (`https://api.watchmode.com/v1/title/${findMovieWatchmode}/sources/?apiKey=Bpd9IwBs5AkzbM2bATaDdYxNsADtlQpCfMQM9CTE`)

if(!resp.ok) {
 throw new error("Något blev fel...")
    
 }

watchmodeApi = await resp.json();







 }catch(error) {
 console.error(error); }
 

showMovieInfo()

}





function showMovieInfo() {
let useTmdbApi = tmdbApi.movie_results
let useWatchmodeApi = watchmodeApi.slice(0,1)


console.log(useWatchmodeApi);
let movieInfoEl = document.querySelector(".Show_movies");

movieInfoEl.innerHTML = ""
useTmdbApi.forEach(movie => {

    
let h2El = document.createElement("h2")
let h3ElOverview = document.createElement("h3")
let h3ElRelesedate = document.createElement("h3")
let h3ElAverage = document.createElement("h3")
let h3ElvoteNumber = document.createElement("h3")


let movieTitleEl = document.createTextNode("Title:")
let overviewEl = document.createTextNode("Plot:")
let relesedateEl = document.createTextNode("Movie Relesdate")
let averageEl = document.createTextNode("Review Score ")
let voteNumberEl = document.createTextNode("Review Count")


let titelParagrafEl = document.createElement("p")
let overviewParagrafEl = document.createElement("p")
let relesedateParagrafEl = document.createElement("p")
let averageParagrafEl = document.createElement("p")
let voteParagrafEl = document.createElement("p")

let paragrafMovieTitleEl = document.createTextNode(movie.title)
let paragrafOverviewEl = document.createTextNode(movie.overview)
let paragrafRelesedateEl = document.createTextNode(movie.release_date)
let paragrafAverageEl = document.createTextNode(movie.vote_average)
let paragrafVoteNumberEl = document.createTextNode(movie.vote_count)



movieInfoEl.appendChild(h2El)
movieInfoEl.appendChild(titelParagrafEl)
h2El.appendChild(movieTitleEl)
titelParagrafEl.appendChild(paragrafMovieTitleEl)
  
movieInfoEl.appendChild(h3ElOverview)
movieInfoEl.appendChild(overviewParagrafEl)
h3ElOverview.appendChild(overviewEl)
overviewParagrafEl.appendChild(paragrafOverviewEl)

movieInfoEl.appendChild(h3ElRelesedate)
movieInfoEl.appendChild(relesedateParagrafEl)
h3ElRelesedate.appendChild(relesedateEl)
relesedateParagrafEl.appendChild(paragrafRelesedateEl)

movieInfoEl.appendChild(h3ElAverage)
movieInfoEl.appendChild(averageParagrafEl)
h3ElAverage.appendChild(averageEl) 
averageParagrafEl.appendChild(paragrafAverageEl)

movieInfoEl.appendChild(h3ElvoteNumber)
movieInfoEl.appendChild(voteParagrafEl)
h3ElvoteNumber.appendChild(voteNumberEl) 
voteParagrafEl.appendChild(paragrafVoteNumberEl)


})

useWatchmodeApi.forEach(watch => {

let h3Wheretowatch = document.createElement("h3")
let wheretowatchEl = document.createTextNode("Where to watch this!")
let wheretowatchParagrafEl = document.createElement("p")
let wheretowatchTextnode = document.createTextNode("you can watch this on "+ watch.name + " with a " +watch.type+ " plan in region " + watch.region)

movieInfoEl.appendChild(h3Wheretowatch)
h3Wheretowatch.appendChild(wheretowatchEl)
movieInfoEl.appendChild(wheretowatchParagrafEl)
wheretowatchParagrafEl.appendChild(wheretowatchTextnode)


})



}
