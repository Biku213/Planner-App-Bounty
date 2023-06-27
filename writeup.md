# Planner App (MyCustomWidget)

## Added Custom Widget
- A Game - Tic Tac Toe

## Reason for Choosing the TicTacToe Custom Widget

- Entertainment and Relaxation: 
Adding a game like Tic Tac Toe to a planner app can provide users with a source of entertainment and relaxation during breaks or downtime. It offers a brief escape from the planning and organizing aspects of the app, allowing users to unwind and have some fun.

- Cognitive Stimulation: 
Tic Tac Toe is a simple yet strategic game that can stimulate cognitive skills such as critical thinking, problem-solving, and decision-making. By including the game within the planner app, users can engage their minds and enjoy a mental challenge.

- Productivity Boost: 
While it may seem counterintuitive, taking short breaks to play games like Tic Tac Toe can actually improve productivity. Studies have shown that periodic breaks and mental diversions can help reduce stress, increase focus, and enhance overall productivity.

- User Engagement and Retention: 
By incorporating interactive elements like games, planner apps can increase user engagement and retention. Offering more than just planning features, such as the ability to play games, can make the app more appealing and encourage users to spend more time within the app.

- Personalization and Customization: 
The addition of a Tic Tac Toe widget allows users to personalize their planner app experience. They can choose to play a game, challenge themselves, or even compete with friends or colleagues if multiplayer functionality is implemented.

## How the Widget Works??

1. Initial State:
- The widget starts with an initial state, including an empty board, current player set to 'X', and no winner.

2. Board Representation:
- The game board is represented by an array called board that holds the values of each cell. Initially, all cells are set to null, indicating an empty cell.

3. Player Turns:
- Each player takes turns placing their mark ('X' or 'O') on the board by clicking on an empty cell.

- When a cell is clicked, the handleCellClick function is called, which updates the state of the board with the current player's mark.

- The current player is then toggled to the next player using the setCurrentPlayer function.

4. Checking for a Winner:
- After each player makes a move, the checkForWinner function is called to determine if there is a winner.

- The function checks the current state of the board against the predefined winningConditions array, which lists all the possible winning combinations.

- If any winning condition is met (e.g., three marks in a row, column, or diagonal), the winning player is identified and stored in the winner state variable.

5. Game Status Display:
- The game status is displayed based on the current state of the game.

- If a winner is determined, the status displays the winning player.

- If all cells are filled and no winner is found, the status declares a draw.

- Otherwise, the status shows the current player's turn.

6. Resetting the Game:
- The reset button allows users to restart the game.

- When clicked, the resetGame function is called, which resets the board, sets the current player back to 'X', and clears the winner.

By updating the state of the board, tracking the current player, checking for a winner, and providing a reset functionality, the Tic Tac Toe widget offers an interactive and playable game for users.


## Explanation of TicTacToeWidget Functionality
- The code uses the useState hook from React to manage state variables.

- The board state is an array of length 9, representing the game board. Each element stores the value of a cell, initially set to null.

- The currentPlayer state keeps track of the current player, starting with 'X'.

- The winner state stores the winning player or remains null if there is no winner yet.

- The winningConditions array defines the eight possible winning combinations in Tic Tac Toe, including rows, columns, and diagonals.

- checkForWinner function is called to check if a player has won the game.

- It iterates through the winningConditions array and compares the values of the board cells at the defined indices.

- If a winning condition is met, the function returns the winning player ('X' or 'O').

- If no winning condition is met, it returns null.

- handleCellClick function is triggered when a player clicks on a cell of the board.

- It first checks if the clicked cell is empty (null) and if there is no winner yet.

- If the conditions are met, it creates a copy of the current board using the spread operator ([...board]).

- It then updates the clicked cell with the current player's mark ('X' or 'O').

- Next, it toggles the current player by setting it to 'X' if the current player is 'O' and vice versa.

- After the update, it calls the checkForWinner function to check if the move resulted in a win.

- If there is a winner, it sets the winner state to the winning player.

- renderCell  function is responsible for rendering an individual cell of the board.

- It takes an index as input and retrieves the corresponding value from the board state.

- It assigns a CSS class to the cell based on the value to style it with the respective player's color.

- When clicked, it invokes the handleCellClick function with the corresponding index.

- resetGame function is called when the "Reset Game" button is clicked.

- It resets the game by setting the board state to an array of null values, setting the currentPlayer to 'X', and clearing the winner state.

- The game status is displayed based on the state variables.

- If there is a winner, it shows the winning player.

- If all cells are filled and there is no winner, it declares a draw.

- Otherwise, it shows the current player's turn.

The TicTacToeWidget function encapsulates the game logic and rendering. It allows players to interact with the game board, tracks the game progress, and provides a reset functionality to start a new game.



