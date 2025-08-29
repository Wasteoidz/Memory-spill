//Model
const app = document.getElementById('spill');


//View
updateView()
function updateView() {
        app.innerHTML = /*HTML*/`
    <h1 class="header" title="Click me to play again!" onclick="updateView()">&#128040;Memory game&#128040;</h1>
    
    <section class="memory-game">

        <div id="1" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="1" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="2" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20090210-668MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="2" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20090210-668MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="3" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20100323-121MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="3" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20100323-121MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="4" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-064MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="4" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-064MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="5" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-157MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="5" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-157MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="6" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20190904_0434SP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="6" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20190904_0434SP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="7" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20191024_001RP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="7" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20191024_001RP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="8" class="memory-card">
                <img class="forside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="8" class="memory-card">
                <img class="forside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>

        
        
        <section>
        
    `;

        const cards = document.querySelectorAll('.memory-card'); /* henter css klassen .memory-card og deklarerer den som cards */
        cards.forEach(card => card.addEventListener('click', flipCard,)); /* legger til en eventlistener til hvert kort hvor vi har funksjonen flipCard() */
        cards.forEach(card => {
                const randomPos = Math.floor(Math.random() * cards.length);
                card.style.order = randomPos;
        });
}
//Controller

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    // Compare IDs to check for match
    if (firstCard.id === secondCard.id) {
        // Match! Disable further clicks
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    } else {
        // Not a match, flip back after delay
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


// function flipCard() {  /* flipper kortene */
//     this.classList.toggle('flip');
//     console.log('click'); 
//     }