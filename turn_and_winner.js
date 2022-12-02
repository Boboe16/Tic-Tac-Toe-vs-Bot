let board = {
    space_1: document.getElementById('1'),space_2: document.getElementById('2'),space_3: document.getElementById('3'),
    space_4: document.getElementById('4'),space_5: document.getElementById('5'),space_6: document.getElementById('6'),
    space_7: document.getElementById('7'),space_8: document.getElementById('8'),space_9: document.getElementById('9')
}

function isEmpty(board) {
    return Object.keys(board).length === 0;
}

function board_keys(board) {
    return Object.keys(board)
}

function draw_finder() {
    /*if ('X' || 'Y' == document.getElementById('1').textContent&&document.getElementById('2').textContent&&document.getElementById('3').textContent&&document.getElementById('4').textContent&&document.getElementById('5').textContent&&document.getElementById('6').textContent&&document.getElementById('7').textContent&&document.getElementById('8').textContent&&document.getElementById('9').textContent) {
        document.getElementById('winner-container-item').innerHTML = 'Draw'
        document.getElementById('winner-container').style. visibility = 'visible'
    }*/

    if (board_keys(board).length == 0) {
        document.getElementById('winner-container-item').innerHTML = 'Draw'
        document.getElementById('winner-container').style. visibility = 'visible'
    }

    
}

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

function bot_component() {

    function getRandomProperty(board) {

        let keys = Object.keys(board);

        return keys[Math.floor(Math.random() * keys.length)];
    }

    let tai = getRandomProperty(board)
                
    if (tai == 'space_1') {
        board.space_1.innerHTML = 'O'
        delete board.space_1
        document.getElementById('grid-item-1').removeAttribute('onclick')
        winner_finder('O')
        return      
    }

    if (tai == 'space_2') {
        board.space_2.innerHTML = 'O'
        delete board.space_2 
        document.getElementById('grid-item-2').removeAttribute('onclick')
        winner_finder('O')
        return      
    }

    else if (tai == 'space_3') {
        board.space_3.innerHTML = 'O'
        delete board.space_3
        document.getElementById('grid-item-3').removeAttribute('onclick')
        winner_finder('O')
        return      
    }
    
    else if (tai == 'space_4') {
        board.space_4.innerHTML = 'O'
        delete board.space_4
        document.getElementById('grid-item-4').removeAttribute('onclick')
        winner_finder('O')
        return      
    }

    else if (tai == 'space_5') {
        board.space_5.innerHTML = 'O'
        delete board.space_5
        document.getElementById('grid-item-5').removeAttribute('onclick')
        winner_finder('O')
        return
    }

    else if (tai == 'space_6') {
        board.space_6.innerHTML = 'O'
        delete board.space_6
        document.getElementById('grid-item-6').removeAttribute('onclick')
        winner_finder('O')
        return 
    }
    else if (tai == 'space_7') {
        board.space_7.innerHTML = 'O'
        delete board.space_7
        document.getElementById('grid-item-7').removeAttribute('onclick')
        winner_finder('O')
        return        
    }
    else if (tai == 'space_8') {
        board.space_8.innerHTML = 'O'
        delete board.space_8
        document.getElementById('grid-item-8').removeAttribute('onclick')
        winner_finder('O')
        return
    }
    else if (tai == 'space_9') {          
        board.space_9.innerHTML = 'O'
        delete board.space_9
        document.getElementById('grid-item-9').removeAttribute('onclick')
        winner_finder('O')
        return
    }
}

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