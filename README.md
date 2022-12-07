# Tic-Tac-Toe-vs-Bot
Tic-Tac-Toe is a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares. In this README.md file I will tell you how the code works.
</br>

<h2>Single Player</h2>

In single player there's a grid that contains 9 items, each items contains 3 attribute ```onclick(onclick goes user(1) until user(9))```, ```id ```, ``` class``` and a 1 element h1.

```
<div class="grid-item" id="grid-item-1" onclick="user(1)">
    <h1 id="1"></h1>
</div>
```

The ```onclick="user(1)"``` is connected to a function called user(number).

```
function user(number) {
    if (number == number) {
        document.getElementById(number).innerHTML = 'X'
        document.getElementById('grid-item-' + number).removeAttribute('onclick')
        delete board[`space_${number}`]
        winner_finder('X')
        draw_finder()
    }
    bot()
}
```

Each click, the grid item's content will have 'X' and remove one of the attribute so it can never be clicked again.

```
document.getElementById(number).innerHTML = 'X'
document.getElementById('grid-item-' + number).removeAttribute('onclick')
```

It will also delete one of the object's item which is connected to bot's move and win, draw stuff.
```
delete board[`space_${number}`]
```
