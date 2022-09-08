const searchResult = document.getElementById("search-result")
const exploreResult = document.getElementById("explore-result")

const homescreen = document.getElementById("homescreen-message")

const watchListButton = document.getElementById("watch")
const clearListButton = document.getElementById("clear-list")
    clearListButton.style.visibility = "hidden"
const watchList = document.getElementById("watch-list")
const watchArray = document.createElement("p")
watchListButton.addEventListener("click", () => {
    exploreResult.innerHTML = ""
    searchResult.innerHTML = ""
    watchList.style.visibility = "visible"
    clearListButton.style.visibility = "visible"
})

clearListButton.addEventListener("click", ()=> {
    watchList.innerHTML = ""
    alert("List cleared!")
})

const allMovies = document.getElementById("all-movies")
allMovies.addEventListener("click", (event) => {
    event.preventDefault()
    searchResult.innerHTML = ""
    exploreResult.innerHTML = ""
    watchList.style.visibility = "hidden"
    clearListButton.style.visibility = "hidden"
    homescreen.style.visibility = "hidden"
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
                const removeButton = document.createElement("button")
                    removeButton.innerText = "Remove"
                    removeButton.setAttribute("id", "remove")
                    removeButton.addEventListener("click", event => {
                        watchListEntry.remove()
                        removeButton.remove()
                    })
                watchButton.addEventListener("click", (event) => {
                    watchList.append(watchListEntry)
                    watchList.append(removeButton)
                })
                watchButton.addEventListener("click", event => alert("Added to watch list!"))
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
    homescreen.style.visibility = "hidden"
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
                const removeButton = document.createElement("button")
                    removeButton.innerText = "Remove"
                    removeButton.setAttribute("id", "remove")
                    removeButton.addEventListener("click", event => {
                        watchListEntry.remove()
                        removeButton.remove()
                    })
                watchButton.addEventListener("click", (event) => {
                    watchList.append(watchListEntry)
                    watchList.append(removeButton)
                })
                watchButton.addEventListener("click", event => alert("Added to watch list!"))
        })
    })
    form.reset() //removes search bar content
})