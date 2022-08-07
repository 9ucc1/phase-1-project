const h2 = document.createElement("h2");
h2.textContent = "";
document.querySelector("body").appendChild(h2);

const form = document.getElementById("movie-search")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    //console.log("event", event)
    // data we want to pass from the form: what you searched
    //event.target[0].value
    fetch(`https://ghibliapi.herokuapp.com/films?q=${event.target[0].value}`)
    .then(response => response.json())
    .then(response => {
        console.log(response[0].title)
        const searchResult = document.getElementById("search-result")
        searchResult.innerHTML = ""
        const li = document.createElement("ul")
        response.map(item =>{
            const img = document.createElement("img")
            img.src = item.image
            const titleAndYear = document.createElement("h3")
            titleAndYear.innerText = item.title + " (" + item.release_date + ")"
            const ogTitle = document.createElement("h4")
            ogTitle.innerText = item.original_title
            const director = document.createElement("h4")
            director.innerText = "Directed by " + item.director
            const description = document.createElement("p")
            description.innerText = item.description
            li.append(img, titleAndYear, ogTitle, director, description)
            searchResult.append(li)
        })
    })
    form.reset()
})
    // I want to iterate through the array of objects to find the object
    // that contains the title key with the value that I searched

        //login, avatar_url, url
        //console.log("login", response.items[0].login)
        /*response.items.map(item =>{
            const li = document.createElement("li")
            const h2 = document.createElement("h2")
            h2.textContent = item.login
            h2.addEventListener("click", e => showUserRepos(item.login, e))

            const img = document.createElement("img")
            img.src = item.avatar_url
            const a = document.createElement("a")
            a.href = item.html_url
            a.innerText = "profile"

            const userList = document.querySelector("#user-list")
            li.append(h2, img, a)
            userList.append(li)
        })*/

const randomizeButton = document.getElementById("randomize")
randomizeButton.addEventListener("click", (event) =>{
    event
})