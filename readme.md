<h1 style="font-family: Rockwell">Block Out</h1>

Created by Alex Lecky

## Table of Contents

- Background
- Functionality & MVP
- Wireframes
- Technologies
- Implementation Timeline
- Bonus Features

## Background

In the world of minecraft, there is such a game that has been named **'spleef'**. Minecraft a game where users are able to interact with and manipulate a 3d 'blocky' world.

![minecraft](https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f)

The players are free to do what they please and there is no real pressing tasks to do other than build and destroy as much as you'd like as if you were playing with legos.

Throughout the years since being released, many fun mini games came about in the player community. Spleef is one these.

To play spleef, the players must first build a floating platform in the sky. Typically this is done with the snow 'block'.

![snow](https://for-minecraft.com/uploads/posts/2019-04/1556098605_snow-spleef-3.jpg)

The reason for this is that snow is very easy to break with the shovel tool that players can possess. Also, once broken users can pick up the 'item drop (snow ball)' and throw snowballs at each other.

But what about this breaking? In spleef, once the platform is built, players take their starting positions and prepare for battle. The battle is fought by players running about the platform and using their fist or tool, whatever it be, to break the blocks that their opponents are standing/running on so that their opponent may fall through and off the platform deeming them out of the game. This is what it may look like below.

![gameplay](https://external-preview.redd.it/B2suUYm58gqvaKpdea_-XxDWzACCU1Zca7YGMnlUemM.jpg?width=640&crop=smart&auto=webp&s=21d51f2e9aff238e6cf568118154bd6f50a1bb79)

To win the game, you must be the last one standing a top the platform, meaning everyone else fell through the now 'holey' play area. After a victor is claimed, the game is reset/rebuilt and players are free to play again.

Personally, I've spent much time enjoying this mini game. It's always a fast paced, dynamic, and exiciting game.

---

## Functionality

This project is based off this spleef game. It is implemented in a 2d over the top style, and involves 2 players (Player vs Player) or (Player vs Computer). Since devolping a fully funcitonal 3d game is above my current skill level, 2d styled with minimalistic art satisifies for now. The main functionality is the same as Minecraft's spleef but it'll be a bit more set in stone.

The players spawn a top this floating patch of earth. The player's markers are little pixelated shovels. Once begun, the players use the **WASD** or **Arrow Keys** to traverse across the platform and another button like space or enter to use their shovel to break the block next to them.
</br>
<img src="https://gcdnb.pbrd.co/images/KkNMDd3507Tx.png?o=1" width="100" style="border-radius: 10px">

Once a player breaks a block, it will expose the next layer of block beneath that broken one, in total their will be 3 layers. Only once the last layer is broken will there no longer be a block for the player to stand on, allowing the player to fall through and be eliminated.

>The playing field itself, at all times will appear to be floating in the sky, unbound to any earthly constraints such as gravity of physics.

The players will have various options in strategy. They
can try to  
- undermine the opposing player (offensive)
- isolate the opposing player (Indirect Offense)
- bait the player into a hole (defensive)
- isolate themselves (defensive)
- run down the time and survive the enclosing walls (passive)

Now what if a player decides to isolate themselves on an island, disallowing the opponent to reach their position? Typically in spleef there is a 3rd factor, an enviroment variable we call it. Usually this means that the playing area (platform) will decrease in size every 15 seconds for example. Ultimately there will be a platform only big enough for one person should neither player choose to fight, leaving only one victor. So players are also racing against the clock.

> This feature is yet to implemented

### List of features

<!-- - UI
    - 'How to play' pop up screen
    - 'Choose character screen'
    - 'Pause button' -->
- Gameplay
    <!-- - 'Count down clock' -->
    <!-- - 'Dynamically changing game platform'
        - Shrinking platform
        - <img src="https://thumbs.gfycat.com/FragrantPastelAmericanwarmblood-max-1mb.gif" style="border-radius:15px; ">
        - Block -->
    - 'Winner display'
    - Player
        - Ability to move
        - Ability to destroy ground
        - Ability to fall through field

### *The game currently looks like this*
<img src="https://gcdnb.pbrd.co/images/qCgBjDh7WZwJ.png?o=1" style="border-radius:30px; ">



---

The player animations themselves are simple in nature, nothing fancy other than just some smoothing effects. The exact animations required are;

- Movement
    - Turning
---
## Technologies

The technologies for this game are very simple. It uses purely javascript and it's canvas feature. In the future there may be room for some additional libraries but in it's current state, javascript and canvas are the only things required.

---

## Implementation Timeline

| Day | Task |
|-|-|
|*Friday*| Develop fundemental skills on canvas
|*Saturday*| Research & learn required methods for game & create files and pseudo code 
|*Sunday*| Create code required for basic game functionality, render board and player
|*Monday*| Build main game page and debug, add AI
|*Tuesday*| Debug more
|*Wednesday*| Add Basic CSS
|*Thursday*| Finish Game














