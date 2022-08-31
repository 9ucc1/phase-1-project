//const h2 = document.createElement("h2");
//h2.textContent = "";
//document.querySelector("body").appendChild(h2);

const searchResult = document.getElementById("search-result")
const exploreResult = document.getElementById("explore-result")

const watchListButton = document.getElementById("watch")
const watchList = document.getElementById("watch-list")
const watchArray = []
watchListButton.addEventListener("click", () => {
    exploreResult.innerHTML = ""
    searchResult.innerHTML = ""
    watchList.innerText = watchArray
})


const allMovies = document.getElementById("all-movies")
allMovies.addEventListener("click", (event) => {
    event.preventDefault()
    searchResult.innerHTML = ""
    exploreResult.innerHTML = ""
    fetch(`https://ghibliapi.herokuapp.com/films`)
    .then(response => response.json())
    .then(response => {
        const p = document.createElement("p")
        response.map(item => {
            const img = document.createElement("img")
            img.src = item.image
            const titleAndYear = document.createElement("h2")
            titleAndYear.innerText = item.title + " (" + item.release_date + ")"
            p.append(img)
            exploreResult.append(p)
            img.setAttribute("id", "allmovieslist")
            img.addEventListener("click", (event) => {
                event.preventDefault()
                exploreResult.innerHTML = ""
                const ogTitle = document.createElement("h4")
                ogTitle.innerText = item.original_title
                const director = document.createElement("h4")
                director.innerText = "Directed by " + item.director
                const description = document.createElement("p")
                description.innerText = item.description
                const watchButton = document.createElement("button")
                watchButton.setAttribute("id", "add-to-watch")
                watchButton.innerText = "Add to Watch List"
                    watchButton.addEventListener("click", (event) => watchArray.push(item.image))
                exploreResult.append(img, titleAndYear, ogTitle, director, description, watchButton)
            })
        })
    })
})
/*const favButton = document.getElementById("add-to-favorites")
            favButton.addEventListener("click", () => {
                const favList = document.getElementById("favorites-list")
                favList.append("HUH?")
            })*/


const form = document.getElementById("movie-search")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    searchResult.innerHTML = ""
    exploreResult.innerHTML = ""
    // data we want to pass from the form: what you searched
    //event.target[0].value
    fetch(`https://ghibliapi.herokuapp.com/films?q=${event.target[0].value}`)
    .then(response => response.json())
    .then(response => {
        //console.log(response[0].title)
        const li = document.createElement("ul")
        response.map(item =>{
            const img = document.createElement("img")
            img.src = item.image
            const watchButton = document.createElement("button")
            watchButton.setAttribute("id", "add-to-watch")
            watchButton.innerText = "Add to Watch List"
                watchButton.addEventListener("click", () => console.log("HI"))
            const titleAndYear = document.createElement("h2")
            titleAndYear.innerText = item.title + " (" + item.release_date + ")"
            const ogTitle = document.createElement("h4")
            ogTitle.innerText = item.original_title
            const director = document.createElement("h4")
            director.innerText = "Directed by " + item.director
            const description = document.createElement("p")
            description.innerText = item.description
            li.append(img, titleAndYear, ogTitle, director, description, watchButton)
            searchResult.append(li)
        })
    })
    
    form.reset()
})

function appendWatch(){
    console.log("HIII")
}