# Phase 1 Project

## STUDIO GHIBLI MOVIE FINDER

Top text:
Make a list of your favorite Studio Ghibli movies and keep track of the ones you want to watch next!

If you've never seen any Studio Ghibli movies and don't know where to start, hit Explore All Movies.

https://ghibliapi.herokuapp.com/films

Basic idea:
- Creates 2 lists of ghibli movies: TO WATCH and FAVORITES
- Returns a movie from a search bar based on title, or explore all movies
- "favorite" or "add to watch list" or "next result"

Basic layout:
- Top: search
    - 1. Explore All Movies button
        - returns all movies images, mousing over lets you see the title/year
        - clicking gives you detailed movie page like how search would return
    - 2. Search bar + space for result to appear (prefer one at a time?)
        - Text: "search for movie by title"
        - Buttons: search, add to watch list, add to favorites list
        - Image: movie image, title, original title, year, description
- Bottom: two columns
    - 1. TO WATCH list
        - assembles movies from the first column that user hits "add to my list" on
        - un-numbered list
        - stores movie poster + title, year
        - button: delete, clear list, "favorite" moves movie from TO WATCH to FAVORITE
    - 2. FAVORITE list
        - unnumbered list
        - assembles movies from TO WATCH list or "already watched" button
        - delete button / clear list


I have questions about:

8/06 (resolved)
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