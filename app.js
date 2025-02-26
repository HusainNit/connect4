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

const test =(event)=>{
console.log(`press ${event.target.id}`);
// console.log(document.querySelector(`#${event.target.id}));//dont works
    let getId = document.getElementById(event.target.id);
    let spletId=getId.id.split('-');
    let column=spletId[1];
    let row=spletId[0];
    console.log(`row:${row}  column:${column}`);

   

    for(let rows= board.length-1; rows >= 0; rows--) {
        if(board[rows][column-1] === ''){
            board[rows][column-1] =currentTurn;
            console.log(document.getElementById(`${rows}-${column}`));
            document.getElementById(`${rows+1}-${column}`).style.backgroundColor=currentTurn;
            break;
        }
        
    }
   


    //board[6][event.target.id]= currentTurn;
    //document.getElementById(event.target.id).style.backgroundColor=currentTurn;
} 

const circle=document.querySelectorAll(".play");
circle.forEach((cNum)=>{
    cNum.addEventListener('click',test)
})