# Phase 1 Project

## GHIBLI MOVIE LIST MAKER

Top text:
Curious about Studio Ghibli movies but don't know where to start? Or have you seen a few and want a suggestion of what to watch next?

Basic idea:
- Creates 2 lists: TO WATCH and WATCHED
- Returns a randomly generated movie from a search bar based on title or randomly generated movie
- "Add to my list" or "search again"/"next result"

Basic layout:
- Top: search
    - 1. Search bar + space for randomly generated movie to appear
        - Text: "search by title or nothing if you want a surprise."
        - Buttons: search, want to watch, already watched 
        - Image: movie image, title, original title, year, description
- Bottom: two columns
    - 1. TO WATCH list
        - assembles movies from the first column that user hits "add to my list" on
        - un-numbered list
        - stores movie poster + title, year
        - button: delete, clear list, "watched" moves movie from TO WATCH to WATCHED
    - 2. WATCHED list
        - assembles movies from TO WATCH list or "already watched" button
        - heart for favorite?


Things I'm unsure about:
- How to connect an API
- How to find out what data my API has and how to use it
- How to return search results? How to randomly generate result?