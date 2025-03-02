/*-------------------------------- Constants --------------------------------*/
const player=['red','blue']


/*---------------------------- Variables (state) ----------------------------*/
let board=[
    ['','','','','','',''], //top                    // 1, 2, 3, 4, 5, 6, 7

    ['','','','','','',''],                          // 1, 2, 3, 4, 5, 6, 7

    ['','','','','','',''],                          // 1, 2, 3, 4, 5, 6, 7 

    ['','','','','','',''],                          // 1, 2, 3, 4, 5, 6, 7

    ['','','','','','',''],                          // 1, 2, 3, 4, 5, 6, 7

    ['','','','','','',''],// bottom                 // 1, 2, 3, 4, 5, 6, 7
]
let currentTurn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const circles=document.querySelectorAll(".play");
const restBtn=document.querySelector('#rest');
const messageEl=document.querySelector(`.msg`);


/*-------------------------------- Functions --------------------------------*/


const init=(event)=>{
    currentTurn =player[0];
    winner=false;
    tie=false;
    restBoard();
    updateMsg();
}

const restBoard=()=>{
    for(let row=0;row<board.length;row++){
        for(let column=0;column<board[row].length;column++){
            board[row][column]='';
            document.getElementById(`${row+1}-${column+1}`).style.backgroundColor='white';
        }
    }
}

const updateMsg=()=>{
    if(winner===false && tie===false){
        messageEl.textContent=`${currentTurn} turns`;
    }
    else if(winner===false && tie===true){
        messageEl.textContent=`This is tie game`;
    }
    else{
        messageEl.textContent=`${currentTurn} wins`;
    }
}

init()



const handelPlay=(event)=>{
    if(winner===true || tie ===true){
        return;
    }
    console.log(`press ${event.target.id}`);
    //console.log(document.querySelector(event.target.id));//don't works
    let getId = document.getElementById(event.target.id);
    let splitId=getId.id.split('-');
    let column=splitId[1];

    for(let row= board.length-1; row >= 0; row--) {
        if(board[row][column-1] === ''){
            updateBoard(row,column);
            checkForWinner(column);
            checkForTie();
            switchPlayerTurn();
            updateMsg();
            break;
        }
    } 
    
}

const updateBoard=(row,column)=>{
    board[row][column-1] =currentTurn;
    console.log(document.getElementById(`${row+1}-${column}`));
    document.getElementById(`${row+1}-${column}`).style.backgroundColor=currentTurn;
}

const checkForWinner=(column)=>{
    if(winner===true || tie ===true){
        return;
    }
    console.log("check win");
    checkColumn(column);
    checkRow();
    checkDiagonal();
}

const checkForTie=()=>{
    if(winner===true || tie ===true){
        return;
    }
    tie=board.every(row=>row.every(columnCell => columnCell !==''));
}

const checkColumn=(column)=>{
    let color=currentTurn;
    for(let row=board.length-1;row>=0;row--){
        if (board[row][column - 1] === color
            && (row >= 3 && board[row - 1][column - 1] === color)
            && (row >= 2 && board[row - 2][column - 1] === color)
            && (row >= 1 && board[row - 3][column - 1] === color)
        ){
           winner =true;
           console.log("wins in column");
        }
    }
}

const checkRow=()=>{
    let color=currentTurn;
    for(let row=board.length-1;row>=0;row--){
        for(let column=0;column<7;column++){
            if(board[row][column]===color
                && board[row][column+1]===color
                && board[row][column+2]===color
                && board[row][column+3]===color
            ){
                winner =true;
                console.log("wins in row");
            }
        }
    }
    
}



const checkDiagonal=()=>{
 checkRightToLeft();
 checkLeftToRight();
}

const checkRightToLeft=()=>{
    let color=currentTurn;
    for(let row=board.length-1;row>=3;row--){
        for(let column=0;column<=3;column++){
            if(board[row][column]===color
               && board[row-1][column+1]===color
               && board[row-2][column+2]===color
               && board[row-3][column+3]===color
            )
            {
                winner=true;
                console.log("win in right to left diagonal");
            }
        }
    }
}

const checkLeftToRight=()=>{
    let color=currentTurn;
    for(let row=board.length-1;row>=3;row--){
        for(let column=6;column>=3;column--){
            if(board[row][column]===color
               && board[row-1][column-1]===color
               && board[row-2][column-2]===color
               && board[row-3][column-3]===color
            )
            {
                winner=true;
                console.log("win in left to right diagonal");   
            }
        }
    }
}

const switchPlayerTurn = ()=>{
    if(winner===true || tie ===true){
        return;
    }
    else{
        if(currentTurn===player[0]){
            currentTurn=player[1]
        }
        else{
            currentTurn=player[0]
        }
    }
}



/*----------------------------- Event Listeners -----------------------------*/
circles.forEach((currentCircle)=>{
    currentCircle.addEventListener('click',handelPlay)
})

restBtn.addEventListener('click',init);