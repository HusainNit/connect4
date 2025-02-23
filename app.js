let board=[
    ['','','','','',''], //top

    ['','','','','',''],

    ['','','','','',''],

    ['','','','','',''],

    ['','','','','',''],

    ['','','','','',''],

    ['','','','','',''],// bottom
]

const turns=['red','blue']

let currentTurn='red';

const test =(event)=>{
console.log(`press ${event.target.id}`);
console.log(document.getElementById(event.target.id));
// console.log(document.querySelector(`#${event.target.id}));//dont works


    board[6][event.target.id]= currentTurn;
    document.getElementById(event.target.id).style.backgroundColor=currentTurn;
} 

const circle=document.querySelectorAll(".play");
circle.forEach((cNum)=>{
    cNum.addEventListener('click',test)
})