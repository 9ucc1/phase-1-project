# Phase 1 Project

## STUDIO GHIBLI MOVIE FINDER

### Introduction
Use this web app to read about Studio Ghibli movies and keep track of the ones you want to watch next!

If you've never seen any Studio Ghibli movies and don't know where to start, hit Explore All Movies.

![](README-walkthrough-gif.gif)

### Sources
https://ghibliapi.herokuapp.com/films

Basic idea:
- Creates a list of ghibli movies to watch
- Returns a movie from a search bar based on title, or explore all movies
- "add to watch list" at bottom of movie description

Basic layout:
- Top: search
    - 1. Explore All Movies button
        - returns all movies images, mousing over lets you see the title/year
        - clicking gives you detailed movie page like how search would return
    - 2. Search bar + space for result to appear
        - Text: "search for movie by title"
        - Buttons: search, add to watch list, add to favorites list
        - Image: movie image, title, original title, year, description
- Bottom:
    - TO WATCH list
        - assembles movies from search/explore that user hits "add to my list" on
        - un-numbered list
        - stores movie poster + title, year
        - button: delete, clear list

8/06 questions (resolved)
- How to connect an API
- How to find out what data my API has and how to use it
- How to return search results? How to randomly generate result?

8/07
Formatting the explore all movies thing:
- how to do a mouseover event on an image that makes a little overlay with the title and year
Formattimg search results from search bar:
- splitting search results into pages
- adding button for favorite, watch later
- if nothing is put in the search bar, how to stop returning all results when submit is clicked
Making to watch / watched list

8/19
Explore all movies:
- mouseover changes cursor to pointer(?)
Lists:
- append item to list when button is clicked

8/30
- added cursor change to pointer when mouseover search results and buttons
- removed favorites list
- started watch list, having some issues (I want to display array of movie pictures)
- want to make an alert: "added to watch list!"

9/05
- watch list buttons now work to add simple movie title + year to watch list
- alert added
- clear list button added
- want to make delete button on individual watch list items to remove from watch list
- link movie title to description page ...?

9/06
- remove buttons added on watch list
