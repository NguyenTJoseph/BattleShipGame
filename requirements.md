# Requirements

## User stories-

1. I would like a game that simulates Battleship & be able to play it on a webpage.

2. As a player, I would like to be presented a welcome message with the rules of the game.

3. I would like to be able to place my 'ships' on the cells that I select, and not be randomized.

4. As a player, I would like to know if I hit or missed the 'ships' in the cell I was targeting.

5. I would like to know if I won or lost at the end of the game.

6. I would like to be able to play the game again in the same manner.

## Feature Tasks-

1. Create a entry page with prompt to greet user and get their name.    Est. time = "Extra Small

2. Create a grid style board that will be 5 x 5 and have all cells be clickable to place 'ships'.   Est. time = "Extra Small

3. Save 'board' in local storage and start new page generated with players board and computer board with generated cells that contain ships, which is not visible to the player.    Est. time = "Extra Small

4. Cells are clickable and will run through loop for each cell to verify if cell is occupied by ship. Cell will display 'hit', or 'miss' depending on outcome of loop.  Est. time = "Extra Small

5. The game will consist of 3 ships and will end when all of 1 players ships are 'destroyed'.   Est. time = "Extra Small

6. At the end of the final ship being 'destroyed' the game win display a win lose message. The game can then be reset by going to the previous page and repeating all steps.    Est. time = "Extra Small

## Acceptance tests

1. Board created with clickable cells. Save to local Storage. Console log cells & check Applications page on dev tools to verify data storage.

2. Ensure randomly generated computer player cells are populating with 'ships'. Console log array to verify population of cells.

3. Ensure ships are selected and placed on players board. Console log array to verify population of cells.

4. Loop works for all cells and loop properly through only the times needed and no more or less.

5. Play full game and ensure end message appears in both winning and losing games.

6. Able to reset game and play again.
