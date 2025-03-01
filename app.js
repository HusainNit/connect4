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
    updateMsg()
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
        messageEl.textContent=`this is tie game`;
    }
    else{
        messageEl.textContent=`${currentTurn} wins`;
    }
}

init()



const handelPlay=(event)=>{
    if(winner===true){
        return;
    }
    console.log(`press ${event.target.id}`);
    //console.log(document.querySelector(event.target.id));//don't works
    let getId = document.getElementById(event.target.id);
    let splitId=getId.id.split('-');
    let column=splitId[1];
    let row=splitId[0];
    console.log(`row:${row}  column:${column}`);

    for(let rows= board.length-1; rows >= 0; rows--) {
        if(board[rows][column-1] === ''){
            board[rows][column-1] =currentTurn;
            console.log(document.getElementById(`${rows+1}-${column}`));
            document.getElementById(`${rows+1}-${column}`).style.backgroundColor=currentTurn;
            break;
        }
    } 
    checkForWinner(column,row)
    switchPlayerTurn()
    updateMsg() 
}



const checkForWinner=(column,row)=>{
    if(winner===true){
        return;
    }
    console.log("check win");
    // checkColumn(column);
    // checkRow();
    checkDiagonal(column,row);
}

const checkColumn=(column)=>{
    let color=currentTurn;
    for(let rows=board.length-1;rows>=0;rows--){
        if (board[rows][column - 1] === color
            && (rows >= 3 && board[rows - 1][column - 1] === color)
            && (rows >= 2 && board[rows - 2][column - 1] === color)
            && (rows >= 1 && board[rows - 3][column - 1] === color)
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
    if(winner===true){
        return;
    }
}

const switchPlayerTurn = ()=>{
    if(winner===true){
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