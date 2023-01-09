const textBubElement = document.getElementById('text-bub');
//array of plot points
//each plot point should be an object, has text option 1 and option 2
//game should start with first plot point, move on based on user choice
//when game start text-bub div should say plotpoint.text
const choicesElement = document.getElementById('choices');

function startGame () {
    this.toggleScreen('startScreen', false);
    this.toggleScreen('canva', true);
    this.prepareCanvas();
    gameloop.start()
    document.getElementById('start').innerHTML = 'Start Game'
    showTextBubNode(1)
}

const startButton = document.getElementById('start-button');

startButton.addEventListener('click', startGame);

function startGame() {
    // game.js
const startButton = document.getElementById('start-button');
const choiceButtons = document.querySelectorAll('.choice');
const screens = document.querySelectorAll('.screen');

startButton.addEventListener('click', startGame);

function startGame() {
  // hide start screen and show game screen
  screens[0].style.display = 'none';
  screens[1].style.display = 'block';
}

choiceButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // do something based on the choice made
  });
});

}

function showTextBubNode(textBubNodeIndex) {
    const textBubNode = textBubNode.find(textBubNode => textBubNode.id === textBubNodeIndex)
    textBubElement.innerText = textBubNode.text
    while (bottomLeftCornerButtonElement.first) {
        bottomLeftCornerButtonElement.removeChild(bottomLeftCornerButtonElement.firstChild)
    }

    textBubNode.choices.array.forEach(choice => {
        if (showChoices(choice)) {
            const button =document.createElement('button')
            button.innerText = choice.text
            button.classList.add('choices')
            button.addEventListener('click', () => selectChoices(choice))
            choicesButtonElement.appendChild(button)
        }
    });
}

function showChoice(shoice) {
    return true
}

function selectChoices(choices) {

}

const textBubNode = {
    character: {
        story: "You decide to take a walk to clear your head, then suddenly there is a car accident. People crowd around to see if anyone is alive. There is a scream",
        choices: [
            {
                choice: "Run to save yourself!",
                nextText: 2
            },
            {
                choice: "Go back home!",
                nextText: 2
            }
        ]
    },
    character: {
        story: ""
    }
}

startGame()

console.log('R U SERIOUS?!?!?!')