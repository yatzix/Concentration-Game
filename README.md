<h1>Concentration Game <br> 
Food Frezy</h1>

### Getting Started 
https://yatzix.github.io/Concentration-Game/

![Screenshot 2023-04-06 at 5 54 27 PM](https://user-images.githubusercontent.com/124859535/230519092-ddbafb67-d9d8-409c-b256-5ebc11a71481.png)

## Technology Used
-HTML5
-JavaScript
-CSS3
 
### Description
##### Goal: Match 6 pairs with lowest time possible
- The Game will start when player clicks 'Start Game' Button
- When player clicks start game, pop up box will pop-up with instructions to the game "Match the ingredient to the food as fast as possible" 
- When the games starts game will initialized
- The game will be single player 
- When game starts player will have 12 cards to choose from with 6 possible pairs. 
Game will have message appear after all 6 pairs have been macthed displaying `You matched all pairs in ${Time} Seconds and ${flips}! Can you do better?`
- Player wins when all 6 pairs have been flipped and matched.
 ![Screenshot 2023-04-06 at 5 54 35 PM](https://user-images.githubusercontent.com/124859535/230519247-c4b23b90-e3d1-4120-896c-44dcffa94c52.png)


### Win Logic 
- When player clicks on 1st card. Card will remain face up. When player clicks on 2nd card. Player will have 2000ms to look at card. If card matches then matching cards will remain face up.
- If cards do not match cards will flip over.
- Time will keep running until all cards are faced up with matching pairs 
- Timer Stops when player finds all 6 pairs
![Screenshot 2023-04-06 at 5 55 11 PM](https://user-images.githubusercontent.com/124859535/230519268-4f83e417-d2b5-436f-895f-914577d95927.png)


### Next Steps
- Enhance CSS 
- Add Highscore feature

