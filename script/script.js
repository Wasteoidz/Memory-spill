//Model
const app = document.getElementById('spill');
const cards = document.querySelectorAll('.memory-card'); /* henter css klassen .memory-card og deklarerer den som cards */

//View
updateView()
function updateView() {
        app.innerHTML = /*HTML*/`
    <h1 class="header">&#128040;Memory game&#128040;</h1>
    
    <section class="memory-game">

        <div data-id="1" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="1" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="2" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20090210-668MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="2" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20090210-668MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="3" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20100323-121MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="3" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20100323-121MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="4" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-064MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="4" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-064MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="5" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-157MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="5" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-157MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="6" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20190904_0434SP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="6" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20190904_0434SP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="7" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20191024_001RP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="7" class="memory-card">
                <img class="forside" src="css/pictures/NZP-20191024_001RP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="8" class="memory-card">
                <img class="forside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div data-id="8" class="memory-card">
                <img class="forside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>

        
        
        <section>
    `;


        cards.forEach(card => card.addEventListener('click', flipCard,)); /* legger til en eventlistener til hvert kort hvor vi har funksjonen flipCard() */
        cards.forEach(card => {
                let randomPos = Math.floor(Math.random() * cards.length);
                card.style.order = randomPos;
        });
}
//Controller

let flippedCard = false;
let firstCard, secondCard;

function flipCard() { /* flipper kortene */
        this.classList.toggle('flip');
        if(!flippedCard === !flippedCard){
        flippedCard = true;
        firstCard = this;     

        console.log(flippedCard, firstCard) 
        }
        
        else{
                flippedCard = false;
                secondCard = this;
        }

       /* if(firstCard.dataset.id === secondCard.dataset.id){
          firstCard.removeEventListener('click', flipCard,);      
          secondCard.removeEventListener('click', flipCard,);      
        } */
        
        
}; 
