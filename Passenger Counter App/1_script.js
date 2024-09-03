
let countEl = document.getElementById("count-el");
let savedEn = document.getElementById("saved-en");
let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
    
}


function save(){
    let curr = count + " - ";
    // count = 0
    countEl.innerText = count = 0;
    savedEn.textContent +=  curr;
}