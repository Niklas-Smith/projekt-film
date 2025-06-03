"use strict"
let omdbApi = []


 
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

let test = omdbApi
console.log(test);


 }catch(error) {
 console.error(error); }
 


 
 
 omdbPrint()
}

function omdbPrint(){
let movieImageEl = omdbApi

console.log(movieImageEl.Search[0].Title );



let scrollEl = document.querySelector(".scroller");

movieImageEl.Search.forEach(moviePoster => {

let imgEl = document.createElement("img")  
imgEl.src = moviePoster.Poster
imgEl.alt = moviePoster.Title
imgEl.id = moviePoster.imdbID 
imgEl.classList.add("posterImg")
scrollEl.appendChild(imgEl)


})

}