let myLinks = []
const inputEl = document.getElementById("input-el")     //input box 
const inputBtn = document.getElementById("input-btn")   //save button
const tabBtn = document.getElementById("tab-btn")       // Save tab button
const deleteBtn = document.getElementById("delete-btn")  //Delete all button
const ulEL = document.getElementById("ul-el")           //unordered list
//Fetching stored values from local storage and converting it into array 
const linksFromLocalStorage = JSON.parse( localStorage.getItem("myLinks"))


if(linksFromLocalStorage){
    myLinks = linksFromLocalStorage
    render(myLinks)
}

tabBtn.addEventListener("click", function(){
    //fetching the value in adress bar of current tab and current window
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
        render(myLinks)
    })
})

//Function to take array elements and convert them into list of clickable links and render on screen
function render(links){ 
    let listItems = ""
    for(let i = 0; i < links.length; i++){
        //Multiline string 
        listItems += `
            <li>            
                <a target ="_blank" href= "${links[i]}"> 
                    ${links[i]} 
                </a>
            </li>`
    }
    ulEL.innerHTML = listItems
}

inputBtn.addEventListener("click" , function(){
    myLinks.push(inputEl.value)
    inputEl.value = ""
    //saving myLinks array into  local storage by making all elements string as local storage support only string format.
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks)
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()    //clearing local storage
    myLinks = []
    render(myLinks)
    deleteBtn.textContent = "DELETE ALL"
});


function getFirst(arr){
    return arr[0]
}
