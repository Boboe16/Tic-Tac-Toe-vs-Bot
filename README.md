# Tic-Tac-Toe-vs-Bot
Tic-Tac-Toe is a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares. In this README.md file I will tell you how the code works. <a href='https://bulaloi-tic-tac-toe.netlify.app/'>Play here</a>.

The project is still incomplete, you can only play as X in the single player.

</br>

<h2>Single Player</h2>

There are multiple functions in the code. Let's go through each function in detail:

isEmpty(board): This function checks if the board is empty. The board is an object that represents the tic-tac-toe grid and its properties are the different spaces in the grid. If the length of the object keys of the board is 0, it means the board is empty, and the function returns true.

board_keys(board): This function returns an array of the object keys of the board.

draw_finder(): This function checks if there is a draw in the game. It does this by checking if the length of the object keys of the board is 0. If it is, it sets the text of an HTML element with an id of "winner-container-item" to "Draw" and makes the element with an id of "winner-container" visible.

winner_finder_component(symbol): This function is called when a player wins the game. The "symbol" parameter passed to this function is either "X" or "O". The function sets the text of an HTML element with an id of "winner-container-item" to "You won" if the symbol is "X" and "You lose" if the symbol is "O". The board object is set to null, and the "onclick" attribute is removed from all elements with a class name of "grid-item". This makes it so the player can no longer make any moves.

winner_finder(symbol): This function checks if there is a winner in the game by checking if any of the 8 winning combinations have been achieved. The winning combinations are horizontal, vertical, and diagonal. If a winning combination is found, the function calls the "winner_finder_component(symbol)" function, passing in the "symbol" parameter. The function also makes the element with an id of "winner-container" visible.

bot_component(): This function is the main function that controls the behavior of the computer player (also known as the bot). It defines an inner function named "getRandomProperty(board)" which returns a random property of the board. The "bot_component()" function then calls the "getRandomProperty(board)" function and sets the returned value to a variable named "tai". If the "tai" value is equal to a specific string value such as "space_1", it sets the innerHTML of the corresponding HTML element to "O" (the symbol for the computer player) and removes the "onclick" attribute from the element. This process continues until all spaces in the board are filled or a winner is found.

let board = {...}: This line defines the "board" object, which represents the tic-tac-toe grid. Each property of the object is a reference to an HTML element representing a space in the grid.

user(number): When this function is called, the following actions are performed:
If the number parameter passed to the function is equal to number (which is always true), then the text content of an HTML element with an ID equal to number is updated to be 'X'.
The onclick attribute of an element with an ID of 'grid-item-' + number is removed. This probably removes the click event handler from the HTML element, so it can no longer be interacted with by the player.
The board object is updated to delete the property 'space_' + number.
The winner_finder function is called with the argument 'X'. This is likely a function that checks if the current player (represented by 'X') has won the game.
The draw_finder function is called. This is likely a function that checks if the game has ended in a draw.
Finally, the bot function is called. This is likely a function that implements the logic for the computer opponent.
<hr>

<h1>2-Player<h2>
    
</br>
The code uses HTML elements with the class "grid-item" to represent the slots in the grid and "slot" to represent the text content inside each grid item. The text content is either X or O.

winner_finder() is the main function that checks for a winner. It takes a symbol (either X or O) as an argument and checks if there are three of the same symbol in a row either horizontally, vertically, or diagonally. If a winner is found, the function calls winner_finder_component() to display the winner message, then calls delete_onclicks_after_winner() to remove the onclick event from the grid items to prevent further moves.

draw() is a function that checks if the game has ended in a draw, that is, all slots are filled but there is no winner. If this is the case, the function removes the onclick event from all grid items.

user(number) is a function that is triggered when a player clicks on a grid item. It sets the text content of the grid item to X and removes the onclick event to prevent the same slot from being clicked again. Then it calls winner_finder() to check if X has won the game.
