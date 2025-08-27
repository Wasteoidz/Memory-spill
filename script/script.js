//Model
const app = document.getElementById('spill');
let cards = 0;
//Veiw
updateVeiw();
function updateVeiw() {
    app.innerHTML = /*HTML*/`
    <h1>Memory game!</h1> 
    <div id="boardGame">
    </div> <br>
    <button class="knapp" onclick=drawBoard()>Start Spill</button>
    `;
}
//Controller
function game(){
    
}

function drawBoard() {
    return document.getElementById('boardGame').innerHTML = `<div class="cards"></div>`.repeat(16);
        updateVeiw();
}

function show() {
    document.getElementById().style.display = "block";        

}
