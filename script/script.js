//Model
const app = document.getElementById('spill');


//View
updateView()
function updateView() {
    app.innerHTML = /*HTML*/`
    
    <h1>Memory game!</h1>
    
    <section class="memory-game">

        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

           <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

           <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

           <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>
           <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

           <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" src="css/pictures/cartoon-safari-clip-art-orangutan.jpg">
        </div>

    <section>
    `;

    const cards = document.querySelectorAll('.memory-card'); /* henter css klassen .memory-card og deklarerer den som cards */   

    cards.forEach(card => card.addEventListener('click', flipCard)); /* legger til en eventlistener til hvert kort hvor vi har funksjonen flipCard() */  
    
}    
   

//Controller
function game(){
    
};

function flipCard() { /* flipper kortene */
    this.classList.toggle('flip');
    console.log('click');
}  
