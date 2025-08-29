//Model
const app = document.getElementById('spill');


//View
updateView()
function updateView() {
        app.innerHTML = /*HTML*/`
    <h1 class="header">&#128040;Memory game&#128040;</h1>
    
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
        <div id="0" class="memory-card">
                <img class="forside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div id="0" class="memory-card">
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

// let flippedCard = false;

// function flipCard(firstCard, secondCard) { /* flipper kortene */
//         this.classList.toggle('flip');
//         if(!flippedCard){
//         flippedCard = true;
//         firstCard = this;     

//         console.log(flippedCard, firstCard) 
//         }
        
//         else{
//                 flippedCard = false;
//                 secondCard = this;
//         }

//         checkIfMatch()
        
// function checkIfMatch(){


//         if(firstCard.dataset.framework === secondCard.dataset.framework){
//           firstCard.removeEventListener('click', flipCard,);      
//           secondCard.removeEventListener('click', flipCard,);      
//         } 
        
// }        
        
// }; 


function flipCard() {  /* flipper kortene */
    this.classList.toggle('flip');
    console.log('click'); 
    }