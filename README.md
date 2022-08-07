# Phase 1 Project

## GHIBLI MOVIE LIST MAKER

Top text:
Make a list of your favorite Studio Ghibli movies and keep track of the ones you want to watch next!

If you've never seen any Studio Ghibli movies and don't know where to start, hit Explore All Movies.

https://ghibliapi.herokuapp.com/films

Basic idea:
- Creates 2 lists of ghibli movies: TO WATCH and WATCHED
- Returns a movie from a search bar based on title, or explore all movies
- "Add to my list" or "search again"/"next result"

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