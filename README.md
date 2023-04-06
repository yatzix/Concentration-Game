Concentration Game Notes 
Title: Food Frezy 
Part 1 - Overview 

Goal: Match 6 pairs with lowest time possible 

### PseudoCode 
- The Game will start when player clicks 'Start Game' Button
- When player clicks start game, pop up box will pop-up with instructions to the game "Match the ingrident to the food as fast as possible" 
- When the games starts game will initialized
- The game will be single player 
- When game starts player will have 12 cards to choose from with 6 possible pairs. 
Game will have message appear after all 6 pairs have been macthed displaying `You matched all pairs in ${Time} Time! Can you do better?`
- Player wins when all 6 pairs have been flipped and matched 
- Game displays players Top score in Time & Flips 

### Game logic 
- Cards will be displayed facedown on default screen before player clicks "Start Game" button
- When player is deciding to choose a card there will be a hover feature attached to each card facing down making the card bigger to indicate which card player will choose.

### Win Logic 
- When player clicks on 1st card. Card will remain face up. When player clicks on 2nd card. Player will have 2000ms to look at card. If card matches then matching cards will remain face up.
- If cards do not match cards will flip over.
- Time will keep running until all cards are faced up with matching pairs 
- Timer Stops when player finds all 6 pairs
- Game will keep track of flips and time spent on finding all 6 pairs to show as High score

### Set-up
- Use HTML & CSS to set up card game
- 4x3 rows set up with imported images # Concentration-Game

    // function renderBoard() {
    //     board
    // }
    
    // const facedownArr = [...facedownEls]
    // const faceupArr = [...faceupEls]
    // const value1 = faceupArr
    // const value = facedownArr
    // const shuffle = (array) => {
    // for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     const temp = array[i];
    //     array[i] = array[j];
    //     array[j] = temp;
    // }
    // return array;
     
// }
