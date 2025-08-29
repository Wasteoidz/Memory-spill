//Model
const app = document.getElementById('spill');


//View
updateView()
function updateView() {
    app.innerHTML = /*HTML*/`
    <h3 class="h3">100% Win Rate!</h3>
    <h1 class="header">Memory game for Dummies!</h1>
    
    <section class="memory-game">

        <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside">
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
                <img class="bakside" >
        </div>

           <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>

           <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>

           <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>
           <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>

           <div class="memory-card">2
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>

         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>
         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>
         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>
         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
        </div>
         <div class="memory-card">
                <img class="forside" src="css/pictures/NZP-20071211-117MM_thumb.jpg">
              
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
function game(){
    
};

function flipCard() { /* flipper kortene */
    this.classList.toggle('flip');
    console.log('click');
}  
