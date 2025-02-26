let board=[
    ['','','','','','',''], //top                    // 1, 2, 3, 4, 5, 6 

    ['','','','','','',''],                          // 1, 2, 3, 4, 5, 6

    ['','','','','','',''],                          // 1, 2, 3, 4, 5, 6 

    ['','','','','','',''],                          // 1, 2, 3, 4, 5, 6

    ['','','','','','',''],                          // 1, 2, 3, 4, 5, 6

    ['','','','','','',''],// bottom                 // 1, 2, 3, 4, 5, 6 
]

const turns=['red','blue']
let currentTurn='red';

const init=()=>{
    currentTurn ='red';
    for(let row=0;row<board.length;row++){
        for(let column=0;column<board[row].length;column++){
            board[row][column]='';
        }
    }
}
init()

const handelPlay=(event)=>{
    console.log(`press ${event.target.id}`);
    // console.log(document.querySelector(`#${event.target.id}));//dont works
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
}

const circle=document.querySelectorAll(".play");
circle.forEach((cNum)=>{
    cNum.addEventListener('click',handelPlay)
})