const cells = document.querySelectorAll('button')

let plays = []

const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

cells.forEach((cell) => cell.addEventListener('click', handleClick))

function handleClick(e) {
    let cellIsEmpty = !e.target.textContent

    if ( cellIsEmpty ) {
        placeMark(e.target)
    }
}

function placeMark(cell) {
    let symbol = ''
    
    /* Checks the previous value of item in the `plays`- array.
    // Ex. If previous value is `X` then insert symbol `O.
    */

    if ( plays[plays.length - 1] === 'X' ) {
        symbol = 'O'
    } else {
        symbol = 'X'
    }

    plays.push(symbol)
    cell.textContent = symbol

    if ( playerIsTheWinner(symbol) ) {
        alert('You are the winner!')
        return restartGame()
    }

}

function restartGame() {
    location.reload()
}

function playerIsTheWinner(symbol) {
    for(let i = 0; i < WINNING_COMBINATIONS.length; i++){
        const [a, b, c] = WINNING_COMBINATIONS[i]
        if(cells[a].textContent === symbol && cells[b].textContent === symbol && cells[c].textContent === symbol){
            return true
        }
    }
    return false
}