function draw() {
    let gi = document.getElementsByClassName('grid-item')
    let sl = document.getElementsByClassName('slot')
    if (sl[0].getAttribute('id') == 'done' && sl[1].getAttribute('id') == 'done' && sl[2].getAttribute('id') == 'done'
    && sl[3].getAttribute('id') == 'done' && sl[4].getAttribute('id') == 'done' && sl[5].getAttribute('id') == 'done'
    && sl[6].getAttribute('id') == 'done' && sl[7].getAttribute('id') == 'done' && sl[8].getAttribute('id') == 'done') {
        for (let i = 0; i < gi.length; i++) {
            gi[i].removeAttribute('onclick')
        }
        document.getElementById('winner-container-item').innerHTML = 'Draw'
        document.getElementById('winner-container').style. visibility = 'visible'
    }
}

function delete_onclicks_after_winner() {
    let gi_2 = document.getElementsByClassName('grid-item')
    for (let i = 0; i < gi_2.length; i++) {
        gi_2[i].removeAttribute('onclick')
    }
}

function winner_finder_component(symbol) {
    if (symbol == 'O') {
        document.getElementById('winner-container-item').innerHTML = 'O won'
    }
    else if (symbol == 'X') {
        document.getElementById('winner-container-item').innerHTML = 'X won'
    }
}

let class_slot = document.getElementsByClassName('slot')

function winner_finder(symbol) {
    // Winner Horizontal
    if (class_slot[0].textContent == symbol && class_slot[1].textContent == symbol && class_slot[2].textContent == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
        delete_onclicks_after_winner()
    }
    
    else if (class_slot[3].textContent == symbol && class_slot[4].textContent == symbol && class_slot[5].textContent == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
        delete_onclicks_after_winner()
    }
    else if (class_slot[6].textContent == symbol && class_slot[7].textContent == symbol && class_slot[8].textContent == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
        delete_onclicks_after_winner()
    }
    // Winner Vertical 
    else if (class_slot[0].textContent == symbol && class_slot[3].textContent == symbol && class_slot[6].textContent == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
        delete_onclicks_after_winner()
    }
    else if (class_slot[1].textContent == symbol && class_slot[4].textContent == symbol && class_slot[7].textContent == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
        delete_onclicks_after_winner()
    }
    else if (class_slot[2].textContent == symbol && class_slot[5].textContent == symbol && class_slot[8].textContent == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
        delete_onclicks_after_winner()
    }
    // Winner Diagonal
    else if (class_slot[0].textContent == symbol && class_slot[4].textContent == symbol && class_slot[8].textContent == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
        delete_onclicks_after_winner()
    }
    else if (class_slot[2].textContent == symbol && class_slot[4].textContent == symbol && class_slot[6].textContent == symbol) {
        winner_finder_component(symbol)
        document.getElementById('winner-container').style.visibility = 'visible'
        delete_onclicks_after_winner()
    }
}

function user(number) {
    if (number == number) {
        document.getElementById(number).innerHTML = 'X'
        document.getElementById('grid-item-' + number).removeAttribute('onclick')
        let slots = document.getElementsByClassName('grid-item')
        for (let i = 0;i < slots.length; i++) {
            slots[i].setAttribute('onclick', `user_2(${i})`)
        }
    }
    winner_finder('X')
    document.getElementById(number).setAttribute('id', 'done')
       draw()
}

function user_2(number) {
    if (number == number) {
        document.getElementById(number).innerHTML = 'O'
        document.getElementById('grid-item-' + number).removeAttribute('onclick')
        let slots = document.getElementsByClassName('grid-item')
        for (let i = 0;i < slots.length; i++) {
            slots[i].setAttribute('onclick', `user(${i})`)
        }
    }
    winner_finder('O')
    document.getElementById(number).setAttribute('id', 'done')
    draw()
}