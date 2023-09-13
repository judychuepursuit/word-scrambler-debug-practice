const words = [
    "apple", "banana", "carrot", "drain", "elephant", "fruit", "guard", "happy", "jungle", "knife", "lemon", "monkey", "oatmeal", "pencil", "rabbit", "sunset", "tiger", "unicorn", "velvet", "western", "xylophone", "yellow", "zebra, yoga, vegan, heart, sun, smile, breathe, narcissist, cheesecake, mountain air, namaste"
];

function scrambleString(inputString) {
    const charArray = inputString.split('');
    let scrambledString = ""
    while (charArray.length > 0) {
        if (Math.random() >= .5) {
            scrambledString += charArray.pop()
        } else {
            scrambledString = charArray.pop() + scrambledString
        }
    }
    if (scrambledString !== inputString) {
        return scrambledString
    } else {
        return scrambleString(scrambledString)
    }
}

let game = {}

window.onload = () => {
    game.inputField = document.getElementById("input")
    game.prompt = document.getElementById("scrambled-word")
    game.scoreboard = document.getElementById("scoreboard")
    // console.log(game.scoreboard)
    game.score = 0
    
    game.inputField.oninput = handleInput
    console.log(game.inputField)
    
    startGame()
}

const handleInput = (event) => {
    if (event.target.value === game.word) {
        game.prompt.innerText = "correct!"
        game.prompt.classList.add("correct")
        game.inputField.value = ""
        game.score += 1
        game.scoreboard.innerText = game.score
        setTimeout(() => {
            startGame()
        }, 750)
    }
}

const startGame = () => {
    game.word = words[(Math.floor(Math.random() * words.length))]
    game.prompt.classList.remove("correct")
    game.scrambledWord = scrambleString(game.word)
    // console.log("game.prompt:")
    // console.log(game.prompt)

    game.prompt.innerText = game.scrambledWord
}