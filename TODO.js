
    let todo = JSON.parse(localStorage.getItem('TODO'))
    if(!todo){
        todo=[]
    };
    


    TaskButton.addEventListener('click',()=>{


        let inpuTT = inputVal.value.toLowerCase()
        if(inputVal.value !== ''){
      
        
            todo.push(inpuTT)
            Display()
            inputVal.value = ''

            localStorage.setItem('TODO', JSON.stringify(todo))

            // console.log(todo);   

        

            error.style.display = 'none'
            


        }else if(inputVal.value === ''){
            error.innerHTML = `<div id="errortext">PLEASE ENTER YOUR TASK</div>`
        }          


})



function Display(){

    let todoStr = JSON.parse(localStorage.getItem('TODO'))
        display.innerHTML = ''
        todo.forEach((elem,i)=>{
        display.innerHTML += `
        
            <div class="BigTaskDiv">
                <div class="taskdiv">${i + 1}) ${elem}</div>
                <button id="Delete" onclick ="erase(${i})">Delete</button>
            </div>
        
        `         
        })       
        if(todo.length >= 4){
            searcp.style.display = 'block'
        }else{
            searcp.style.display = 'none'
        }

    localStorage.setItem('TODO', JSON.stringify(todo))
    
  
}

Display()

function erase(id){
   
   
    todo.splice(id,1)
    localStorage.setItem('TODO', JSON.stringify(todo))
    Display()
   

}


function filterTODO(){
    let searchinp = searchINP.value.toLowerCase()

    display.innerHTML = '';
    todo = JSON.parse(localStorage.getItem('TODO'))
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
