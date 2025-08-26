//Model
const app = document.getElementById('spill');
let cards = 0;
//Veiw
updateVeiw();
function updateVeiw() {
    app.innerHTML = /*HTML*/`
    <h1>Memory game!</h1>
    <div id="boardGame">
    <div onclick="game()" class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    <div class="cards"></div>
    </div>
    `;
};
//Controller
function game(){
    
};
