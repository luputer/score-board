const p1button = document.querySelector("#p1-button");
const p2button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const resetbtn = document.querySelector('#reset');
const winpointoption = document.querySelector('#winpoint');
const p1titel = document.querySelector('#player1')
const p2titel = document.querySelector('#player2')


let p1score = 0;
let p2score = 0;
let winpoint = 0;
let isGameover = false;

function reset(){
    isGameover = false;
    p1score = 0;
    p2score = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
}



//disabled buuton
function disabledbutton(){
    if(winpoint == 0){
        p1button.setAttribute('disabled','');
        p2button.setAttribute('disabled', '');
    } else {
        p1button.removeAttribute('disabled');
        p2button.removeAttribute('disabled');
    }
}


function checkwiner(){
    if(p1score === winpoint){
        isGameover = true;
        alert('player 1 wins!');
    } else if (p2score === winpoint){
        isGameover = true;
        alert('player 2 wins!')
    }
}


p1button.addEventListener('click', () =>{
    if(!isGameover){
        p1score += 1;
        if(p1score === winpoint){
            isGameover = true
        }
        p1Display.textContent = p1score;
    }
    checkwiner();
});

p2button.addEventListener('click',() =>{
    if(!isGameover){
        p2score += 1;
        if(p2score === winpoint){
            isGameover = true
        }  
        p2Display.textContent = p2score
    }
    checkwiner();
})

resetbtn.addEventListener('click', reset)

winpointoption.addEventListener('change',function (){
    winpoint = parseInt(this.value);
    disabledbutton();
    reset();
});
disabledbutton()


// change the tittle 
p1titel.addEventListener('input',function(){
    console.log('change player 1:', this.textContent)
});

 p2titel.addEventListener('input', function(){
    console.log('Change Player 2: ', this.textContent)
 })



// let p1score = 0;
// let p2score = 0
// let menang = 3;
// let kalah = false;


// function reset(){
//     kalah = false
//     p1score = 0
//     p2score = 0
//     p1Display.textContent = 0
//     p2Display.textContent = 0
// }


// p1button.addEventListener('click', function (){
//     if(!kalah){
//         p1score += 1;
//         if(p1score === menang){
//             kalah = true;         
//         }
//         p1Display.textContent = p1score;
//     }
// });


// p2button.addEventListener('click', function (){
//     if(!kalah){
//         p2score += 1;
//         if(p2score === menang){
//             kalah = true;
//         }
//         p2Display.textContent = p2score;
//     }
// });

// resetbtn.addEventListener('click',reset);
// winpointoption.addEventListener('change', () =>{
//     menang = parseInt(this.value); 
//     reset();
// })

