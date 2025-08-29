//Model
const app = document.getElementById('spill');


//View
updateView()
function updateView() {
    app.innerHTML = /*HTML*/`
    <h1 class="header">&#128040;Memory game&#128040;</h1>
    
    <section class="memory-game">

        <div id="1"class="memory-card">
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
        <div id="2"class="memory-card">
                <img class="forside" src="css/pictures/NZP-20090210-668MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20100323-121MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20100323-121MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-064MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-064MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-157MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20111005-157MM_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20190904_0434SP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20190904_0434SP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20191024_001RP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20191024_001RP_thumb.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>
        <div class="memory-card">
                <img class="forside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
                <img class="bakside" src="css/pictures/question-mark.png">
        </div>

        
        
        <section>
    `;

    const cards = document.querySelectorAll('.memory-card'); /* henter css klassen .memory-card og deklarerer den som cards */   

    cards.forEach(card => card.addEventListener('click', flipCard)); /* legger til en eventlistener til hvert kort hvor vi har funksjonen flipCard() */  
    cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;});
}    
//Controller
function flipCard() { /* flipper kortene */
    this.classList.toggle('flip');
    console.log('click');
}  
