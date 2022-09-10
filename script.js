const searchResult = document.getElementById("search-result")
const exploreResult = document.getElementById("explore-result")
const title = document.getElementById("big-title")
const homescreen = document.getElementById("homescreen")
const watchListButton = document.getElementById("watch")
const clearListButton = document.getElementById("clear-list")
    clearListButton.style.visibility = "hidden"
const watchList = document.getElementById("watch-list")
const watchListEntries = document.getElementById("watch-list-entries")
    watchList.style.visibility = "hidden"
watchListButton.addEventListener("click", () => {
    exploreResult.innerHTML = ""
    searchResult.innerHTML = ""
    homescreen.style.display = "none"
    watchList.style.visibility = "visible"
    clearListButton.style.visibility = "visible"
})

title.addEventListener("click", (event) => {
    homescreen.style.display = "block"
    clearListButton.style.visibility = "hidden"
    exploreResult.innerHTML = ""
    searchResult.innerHTML = ""
    watchList.style.visibility = "hidden"
})

clearListButton.addEventListener("click", ()=> {
    watchListEntries.innerHTML = ""
    alert("List cleared!")
})

const allMovies = document.getElementById("all-movies")
allMovies.addEventListener("click", (event) => {
    event.preventDefault()
    searchResult.innerHTML = ""
    exploreResult.innerHTML = ""
    watchList.style.visibility = "hidden"
    clearListButton.style.visibility = "hidden"
    homescreen.style.display = "none"
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
                exploreResult.append(img, titleAndYear, ogTitle, director, description, watchButton)
                const watchListEntry = document.createElement("li")
                watchListEntry.innerText = item.title + " (" + item.release_date + ")"
                    watchListEntry.addEventListener("mouseover", (event) => {
                        watchListEntry.style.textDecoration = "line-through"
                        watchListEntry.style.cursor = "pointer"
                    })
                    watchListEntry.addEventListener("mouseleave", (event) => {
                        watchListEntry.style.textDecoration = "none"
                    })
                    watchListEntry.addEventListener("click", (event) => {
                        watchListEntry.remove()
                    })
                watchButton.addEventListener("click", (event) => {
                    watchListEntries.append(watchListEntry)
                })
                watchButton.addEventListener("click", event => alert("Added to watch list!"))
            })
            img.addEventListener("mouseover", (event) => {
                img.style.border = "solid"
            })
            img.addEventListener("mouseleave", (event) => {
                img.style.border= "none"
            })
        })
    })
})

const form = document.getElementById("movie-search")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    searchResult.innerHTML = ""
    exploreResult.innerHTML = ""
    watchList.style.visibility = "hidden"
    clearListButton.style.visibility = "hidden"
    homescreen.style.display = "none"
    // data we want to pass from the form: what you searched
    //event.target[0].value
    fetch(`https://ghibliapi.herokuapp.com/films?q=${event.target[0].value}`)
    .then(response => response.json())
    .then(response => {
        const li = document.createElement("ul")
        response.map(item =>{
            const img = document.createElement("img")
            img.src = item.image
            const watchButton = document.createElement("button")
            watchButton.setAttribute("id", "add-to-watch")
            watchButton.innerText = "Add to Watch List"
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
            const watchListEntry = document.createElement("li")
                watchListEntry.innerText = item.title + " (" + item.release_date + ")"
                watchListEntry.addEventListener("mouseover", (event) => {
                    watchListEntry.style.textDecoration = "line-through"
                    watchListEntry.style.cursor = "pointer"
                })
                watchListEntry.addEventListener("mouseleave", (event) => {
                    watchListEntry.style.textDecoration = "none"
                })
                watchListEntry.addEventListener("click", (event) => {
                    watchListEntry.remove()
                })
                watchButton.addEventListener("click", (event) => {
                    watchListEntries.append(watchListEntry)
                })
                watchButton.addEventListener("click", event => alert("Added to watch list!"))
        })
    })
    form.reset() //removes search bar content
})
