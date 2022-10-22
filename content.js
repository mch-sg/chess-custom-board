console.log('hello world');


function largeFont() {
    const dStyle = document.querySelector('div,chess-board');
    dStyle.innerHTML = 'background-image: url("https://i.imgur.com/pSlebf0.png")!important;';
}

const button = document.querySelector('button');
document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
    console.log('button clicked');
    largeFont();
}

document.getElementById("lefteye").style.backgroundColor = "purple";

/*button.addEventListener('click', () => {
    const element = document.querySelector('div[class^="daily-puzzle-board"], div[class^="game-preview"], div[class^="board chessboard-component"], div[class^="board v-board chessboard-component"], div[class^="board rounded"], div[class^="board rounded fippled"],div[class^="board fippled rounded"],div[class^="board v-board rounded"],div[class^="board v-board fippled rounded"],div[class^="board disabled rounded"],div[id$="_ChessBoard_boardarea"],div[id^="chess_com_openingboard_1"],div[id^="board_training"],div[id^="divBoard_boardarea"],div[id^="chess_com_tactics_board"],div[id^="chessboard_"],div[id*="chessboard_"],div[id^="chess_com_chessmentorboard_"],div[id*="chess_com_chessmentorboard_"],div[id*="chess_com_chessmentor_board_1_boardarea"],div[id^="chess_com_emailboard_"],div[id="board"],chess-board[class^="board"],chess-board[class^="board flipped"],chess-board[id^="board-blank"],div[id*="chess_com_emailboard_"]');
    element.style.color = 'green';
    element.background.image = "https://i.imgur.com/pSlebf0.png";
  //  { background-image: url("https://i.imgur.com/pSlebf0.png")!important; }
}); */