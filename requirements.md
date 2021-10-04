<!-- Feature Tasks
Accceptance tests -->
# Requirements

## User stories-

1. I would like a game that simulates Battleship & be able to play it on a webpage.

2. As a player, I would like to be presented a welcome message with the rules of the game.

3. I would like to be able to place my 'ships' on the cells that I select, and not be randomized.

4. As a player, I would like to know if I hit or missed the 'ships' in the cell I was targeting.

5. I would like to know if I won or lost at the end of the game.

6. I would like to be able to play the game again in the same manner.

## Feature Tasks-

1. Create a entry page with prompt to greet user and get their name.

2. Create a grid style board that will be 5 x 5 and have all cells be clickable to place 'ships'.

3. Save 'board' in local storage and start new page generated with players board and computer board with generated cells that contain ships, which is not visible to the player.

4. Cells are clickable and will run through loop for each cell to verify if cell is occupied by ship. Cell will display 'hit', or 'miss' depending on outcome of loop.

5. The game will consist of 3 ships and will end when all of 1 players ships are 'destroyed'.

6. At the end of the final ship being 'destroyed' the game win display a win lose message. The game can then be reset by going to the previous page and repeating all steps.

## Acceptance tests

1. Board created with clickable links. Save to local Storage. Console log links & check Applications page on dev tools to verify data storage.

2. Random generated computer player cells. console log array to verify population ofg cells.

3.