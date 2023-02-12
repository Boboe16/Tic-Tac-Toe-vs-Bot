# Tic-Tac-Toe-vs-Bot
Tic-Tac-Toe is a game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares. In this README.md file I will tell you how the code works. <a href='https://bulaloi-tic-tac-toe.netlify.app/'>Play here</a>.

The project is still incomplete, you can only play as X in the single player.

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

Each click, the grid item's content(h1) will have 'X' and remove one of the attribute so it can never be clicked again.

```
document.getElementById(number).innerHTML = 'X'
document.getElementById('grid-item-' + number).removeAttribute('onclick')
```

It will also delete one of the object's item which is connected to bot's move and win, draw stuff.
```
delete board[`space_${number}`]
```

The ```winner_finder('X')``` is a function that finds the winnder. xD

```
function winner_finder(symbol) {
    // Winner Horizontal

    if (document.getElementById('1').innerText == symbol && document.getElementById('2').innerText == symbol && document.getElementById('3').innerText == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
    }

    else if (document.getElementById('4').innerText == symbol && document.getElementById('5').innerText == symbol && document.getElementById('6').innerText == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
    }
    else if (document.getElementById('7').innerText == symbol && document.getElementById('8').innerText == symbol && document.getElementById('9').innerText == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
    }

    // Winner Vertical 

    else if (document.getElementById('1').innerText == symbol && document.getElementById('4').innerText == symbol && document.getElementById('7').innerText == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
    }
    else if (document.getElementById('2').innerText == symbol && document.getElementById('5').innerText == symbol && document.getElementById('8').innerText == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
    }
    else if (document.getElementById('3').innerText == symbol && document.getElementById('6').innerText == symbol && document.getElementById('9').innerText == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
    }

    // Winner Diagonal

    else if (document.getElementById('1').innerText == symbol && document.getElementById('5').innerText == symbol && document.getElementById('9').innerText == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
    } 
    else if (document.getElementById('3').innerText == symbol && document.getElementById('5').innerText == symbol && document.getElementById('7').innerText == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
    }
}
```

The ```document.getElementById('winner-container').style.visibility = 'visible'``` makes the div element called winner-contianer visible after one of the symbols win and the ```winner_finder_component(symbol)``` is a function that contains

```
function winner_finder_component(symbol) {
    if (symbol == 'O') {
        document.getElementById('winner-container-item').innerHTML = 'You lose'
        board = null
        let rs = document.getElementsByClassName('grid-item')
        for(var i = 0; i < rs.length; i++) {
            rs[i].removeAttribute('onclick');
        }
    }
    else if (symbol == 'X') {
        document.getElementById('winner-container-item').innerHTML = 'You won'
        board = null
        let rs = document.getElementsByClassName('grid-item')
        for(var i = 0; i < rs.length; i++) {
            rs[i].removeAttribute('onclick');
        }
    }
}
```

The ```document.getElementById('winner-container-item').innerHTML = 'You lose'``` change the content of an element's content, "You won" if X won and "You lose" if you lose to O.

The ```board = null``` makes the objects null so the bot can never picked again if one of the symbol's won. 

```let rs = document.getElementsByClassName('grid-item')``` get every grid items and the for loop removes every onclick attribute is someone win's.


Now let's get back into the user(number) function.

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

The draw_finder() function contains

```
function board_keys(board) {
    return Object.keys(board)
}

function draw_finder() {
    if (board_keys(board).length == 0) {
        document.getElementById('winner-container-item').innerHTML = 'Draw'
        document.getElementById('winner-container').style. visibility = 'visible'
    }
}
```

The ```board_keys(board)``` returns the object's properties like a list. Example {tae,ihe,boboe}.

draw_finder(). if board's length is 0 its draw.

The last one in ```user(number)``` function called ```bot()``` is dependent on the object called ```board``` that contains

```
let board = {
    space_1: document.getElementById('1'),space_2: document.getElementById('2'),space_3: document.getElementById('3'),
    space_4: document.getElementById('4'),space_5: document.getElementById('5'),space_6: document.getElementById('6'),
    space_7: document.getElementById('7'),space_8: document.getElementById('8'),space_9: document.getElementById('9')
}
```

If the user clicked on one of the grid's item, one of the board's item will be remove so the ```bot()``` can never pick them. After that the ```bot()``` function will start.

```
function bot() {

    function getRandomProperty(board) {

        let keys = Object.keys(board);

        return keys[Math.floor(Math.random() * keys.length)];
    }

    let tae = getRandomProperty(board)

        if (tae == 'space_1') {
            if (document.getElementById('1').innerText == 'X') {
                bot_component()
                return
            }
            board.space_1.innerHTML = 'O'
            delete board.space_1   
            document.getElementById('grid-item-1').removeAttribute('onclick')
            winner_finder('O')   
        }
    
        else if (tae == 'space_2') {
            if (document.getElementById('2').innerText == 'X') {
                bot_component()
                return
            }
            board.space_2.innerHTML = 'O'
            delete board.space_2    
            document.getElementById('grid-item-2').removeAttribute('onclick')   
            winner_finder('O')
        }
    
        else if (tae == 'space_3') {
            if (document.getElementById('3').innerText == 'X') {
                bot_component()
                return
            }
            board.space_3.innerHTML = 'O'
            delete board.space_3
            document.getElementById('grid-item-3').removeAttribute('onclick')
            winner_finder('O')
        }
        
        else if (tae == 'space_4') {
            if (document.getElementById('4').innerText == 'X') {
                bot_component()
                return
            }
            board.space_4.innerHTML = 'O'
            delete board.space_4
            document.getElementById('grid-item-4').removeAttribute('onclick')
            winner_finder('O')
        }
    
        else if (tae == 'space_5') {
            if (document.getElementById('5').innerText == 'X') {
                bot_component()
                return
            }
            board.space_5.innerHTML = 'O'
            delete board.space_5
            document.getElementById('grid-item-5').removeAttribute('onclick')
            winner_finder('O')
        }
    
        else if (tae == 'space_6') {
            if (document.getElementById('6').innerText == 'X') {
                bot_component()
                return
            }
            board.space_6.innerHTML = 'O'
            delete board.space_6 
            document.getElementById('grid-item-6').removeAttribute('onclick')
            winner_finder('O')
        }
        else if (tae == 'space_7') {
            if (document.getElementById('7').innerText == 'X') {
                bot_component()
                return
            }
            board.space_7.innerHTML = 'O'
            delete board.space_7     
            document.getElementById('grid-item-7').removeAttribute('onclick')
            winner_finder('O')   
        }
        else if (tae == 'space_8') {
            if (document.getElementById('8').innerText == 'X') {
                bot_component()
                return
            }
            board.space_8.innerHTML = 'O'
            delete board.space_8
            document.getElementById('grid-item-8').removeAttribute('onclick')
            winner_finder('O')
        }
        else if (tae == 'space_9') {  
            if (document.getElementById('9').innerText == 'X') {
                bot_component()
                return
            }        
            board.space_9.innerHTML = 'O'
            delete board.space_9
            document.getElementById('grid-item-9').removeAttribute('onclick')
            winner_finder('O')
        }
}
```

The ```getRandomProperty(board)``` make a randomizer that will pick an item in the object called board. The ```let tae = getRandomProperty(board)``` eats the function.

```
function getRandomProperty(board) {

    let keys = Object.keys(board);

    return keys[Math.floor(Math.random() * keys.length)];
}

let tae = getRandomProperty(board)
```

Next is about the if else conditional statements.

```
if (tae == 'space_1') {
    if (document.getElementById('1').innerText == 'X') {
        bot_component()
        return
    }
    board.space_1.innerHTML = 'O'
    delete board.space_1   
    document.getElementById('grid-item-1').removeAttribute('onclick')
    winner_finder('O')   
}
```

The ```if (document.getElementById('1').innerText == 'X') {``` executes if 'X' is already on the grid item, anyway ```bot_component()``` returns a function just like ```bot()``` so it will be randomize again.

```board.space_1.innerHTML = 'O'``` grid's item h1 into 'O'. ``` delete board.space_1``` removes one of the board's item so it never pick it again.

```document.getElementById('grid-item-1').removeAttribute('onclick')``` removes the onclick attribute so the user or you can never pick it again.

```winner_finder('O')``` works the same as how it works on the ```user(number)``` function.

