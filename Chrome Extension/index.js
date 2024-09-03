let myLeads = []
const inputEl = document.getElementById("input-el")     //input box 
const inputBtn = document.getElementById("input-btn")   //save button
const tabBtn = document.getElementById("tab-btn")       // Save tab button
const deleteBtn = document.getElementById("delete-btn")  //Delete all button
const ulEL = document.getElementById("ul-el")           //unordered list
//Fetching stored values from local storage and converting it into array 
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    //fetching the value in adress bar of current tab and current window
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

//Function to take array elements and convert them into list of clicable links and render on screen
function render(leads){ 
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        //Multiline string 
        listItems += `
            <li>            
                <a target ="_blank" href= "${leads[i]}"> 
                    ${leads[i]} 
                </a>
            </li>`
    }
    ulEL.innerHTML = listItems
}

inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    //saving myLeads array into  local storage by making all elements string as local storage support only string format.
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()    //clearing local storage
    myLeads = []
    render(myLeads)
    deleteBtn.textContent = "DELETE ALL"
});


function getFirst(arr){
    return arr[0]
}
