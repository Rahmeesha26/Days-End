const textBubElement = document.getElementById('text-bub');
//array of plot points
//each plot point should be an object, has text option 1 and option 2
//game should start with first plot point, move on based on user choice
//when game start text-bub div should say plotpoint.text
const choicesElement = document.getElementById('choices');

let setState =

function startGame () {
    document.getElementById('start').innerHTML = 'Start Game'
    showTextBubNode(1)
}

function startGame() {

}

function showTextBubNode(textBubNodeIndex) {
    const textBubNode = textBubNode.find(textBubNode => textBubNode.id === textBubNodeIndex)
    textBubElement.innerText = textBubNode.text
    while (choicesElement.first) {
        choicesElement.removeChild(choicesElement.firstChild)
    }

    textBubNode.choices.forEach(choice => {
        if (showChoices(choice)) {
            const button = document.createElement('button')
            button.innerText = choice.text
            button.classList.add('choice')
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

const textBubNode = [
    {
        id: 1,
        textbub: "You decide to take a walk to clear your head, then suddenly there is a car accident. People crowd around to see if anyone is alive. There is a scream",
        choice: [
            {
                textbub: "Run to save yourself!",
                nextText: 2
            },
            {
                textbub: "Go back home!",
                nextText: 2
            }
        ]
    },
    {
        id: 2, 
        textbub: "",
        choice: "",
    }
]

startGame()

console.log('R U SERIOUS?!?!?!')