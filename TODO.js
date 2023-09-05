
let todo = [];

TaskButton.addEventListener('click',()=>{

    let inpuTT = inputVal.value.toLowerCase()
    if(inputVal.value !== ''){
        todo.push(inpuTT)

        console.log(todo);   

        Display()

        error.style.display = 'none'
        if(todo.length >= 4){
            searcp.style.display = 'block'
        }



    }else if(inputVal.value === ''){
        error.innerHTML = `<div id="errortext">PLEASE ENTER YOUR TASK</div>`
    }          
})

function Display(){

        display.innerHTML = ''
        todo.forEach((elem,i)=>{
        display.innerHTML += `
        
            <div class="BigTaskDiv">
                <div class="taskdiv">${i + 1}) ${elem}</div>
                <button id="Delete" onclick ="erase(${i})">Delete</button>
            </div>
        
        `         
    })       
    
}

function erase(id){

   todo.splice(id,1)

    Display()
}

function filterTODO(){
    let searchinp = searchINP.value.toLowerCase()

    display.innerHTML = ''
    let filterD = todo.filter((elem,i)=>{
            return elem.includes(searchinp)
    })
    

    filterD.forEach((elem,i)=>{
        display.innerHTML +=
         `
            <div class="BigTaskDiv">
                <div class="taskdiv">${i + 1}) ${elem}</div>
                <button id="Delete" onclick ="erase(${i})">Delete</button>
            </div>

        `
    })

    if(todo.length === 0){
        searcp.style.display = 'none'
    }


}