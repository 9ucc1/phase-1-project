const homescreen = document.getElementById("homescreen")
const result = document.getElementById("result")
const appTitle = document.getElementById("big-title")
appTitle.addEventListener("click", (event) => {
    homescreen.style.display = "block"
    watchListContainer.style.visibility = "hidden"
    clearListButton.style.visibility = "hidden"
    result.innerHTML = ""
})
const watchListContainer = document.getElementById("watch-list")
    watchListContainer.style.visibility = "hidden"
const watchListButton = document.getElementById("watch")
    watchListButton.addEventListener("click", () => {
        result.innerHTML = ""
        homescreen.style.display = "none"
        watchListContainer.style.visibility = "visible"
        clearListButton.style.visibility = "visible"
    })
const watchListEntries = document.getElementById("watch-list-entries")
const clearListButton = document.getElementById("clear-list")
    clearListButton.style.visibility = "hidden"
    clearListButton.addEventListener("click", ()=> {
        watchListEntries.innerHTML = ""
        alert("List cleared!")
    })

const allMovies = document.getElementById("all-movies")
allMovies.addEventListener("click", (event) => {
    result.innerHTML = ""
    watchListContainer.style.visibility = "hidden"
    clearListButton.style.visibility = "hidden"
    homescreen.style.display = "none"
    fetch(`https://ghibliapi.herokuapp.com/films`)
    .then(response => response.json())
    .then(response => {
        const p = document.createElement("p")
        response.map(item => {
            const imgList = document.createElement("img")
            imgList.src = item.image
            p.append(imgList)
            result.append(p)
            imgList.setAttribute("id", "allmovieslist")
            imgList.addEventListener("mouseover", (event) => {
                imgList.style.border = "solid"
            })
            imgList.addEventListener("mouseleave", (event) => {
                imgList.style.border= "none"
            })
            imgList.addEventListener("click", (event) => {
                result.innerHTML = ""
                descriptionPage(item)
            })
        })
    })
})

const form = document.getElementById("movie-search")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    result.innerHTML = ""
    watchListContainer.style.visibility = "hidden"
    clearListButton.style.visibility = "hidden"
    homescreen.style.display = "none"
    fetch(`https://ghibliapi.herokuapp.com/films?q=${event.target[0].value}`)
    .then(response => response.json())
    .then(response => {
        response.map(item =>{
            descriptionPage(item)
        })
    })
    form.reset()
})

function descriptionPage(item){
    const { image, title, release_date, original_title, director, description, movie_banner } = item
    const img = document.createElement("img")
        img.src = image
        img.setAttribute("id", "explore-img")
    const titleAndYear = document.createElement("h2")
        titleAndYear.innerText = title + " (" + release_date + ")"
    const ogTitle = document.createElement("h4")
        ogTitle.innerText = original_title
    const directedBy = document.createElement("h4")
        directedBy.innerText = "Directed by " + director
    const descriptionText = document.createElement("p")
        descriptionText.innerText = description
        descriptionText.setAttribute("id", "description")
    const watchButton = document.createElement("button")
        watchButton.setAttribute("id", "add-to-watch")
        watchButton.innerText = "Add to Watch List"
        watchButton.addEventListener("click", (event) => {
            watchListEntries.append(watchListFunction(item))
                alert("Added to watch list!")
            })
    const lineBreak = document.createElement("br")
    const lineBreak2 = document.createElement("br")
    const lineBreak3 = document.createElement("br")
    const banner = document.createElement("img")
        banner.src = movie_banner
        banner.setAttribute("id", "banner")
    result.append(img, titleAndYear, ogTitle, directedBy, description, lineBreak, watchButton, lineBreak2, banner, lineBreak3)
}

function watchListFunction(item){
    const { title, release_date } = item
    const watchListEntry = document.createElement("li")
        watchListEntry.innerText = title + " (" + release_date + ")"
        watchListEntry.setAttribute("title", "remove from watch list")    
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
    return watchListEntry
}
