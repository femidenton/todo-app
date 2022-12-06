const inputText = document.getElementById('inputText')
const addButton = document.getElementById('add')
const todosListBox = document.getElementById('todosList-box')
const searchInput = document.getElementById('searchInput')

addButton.addEventListener('click', function(e){
    e.preventDefault()
   if(inputText.value != ''){
        let todoDiv = document.createElement('div')
        var oneTodo = document.createElement('input')
        let dateSpan = document.createElement('span')

        todoDiv.classList.add('todo-box')
        oneTodo.classList.add('todo-input')
        oneTodo.setAttribute('readonly', 'readonly')
        oneTodo.value = inputText.value 
        
        var timeElapsed = Date.now() 
        var today = new Date(timeElapsed)
        dateSpan.innerHTML = today.toLocaleString() //toLocaleDateString("en-GB",{weekday,day,month})& toLocaleSTring("en-US,{}")
        console.log(today) 


        todoDiv.append(oneTodo)
        todoDiv.append(dateSpan)
        todosListBox.append(todoDiv)

        const todoDeleteButton = document.createElement('button')
        todoDeleteButton.classList.add('delete')
        todoDeleteButton.innerHTML= 'Delete'

        const todoEditButton = document.createElement('button')
        todoEditButton.classList.add('edit')
        todoEditButton.innerHTML= 'Edit'

        todoDiv.append(todoDeleteButton)
        todoDiv.append(todoEditButton)

        inputText.value = ''


        todoEditButton.addEventListener('click', function(){
            oneTodo.removeAttribute('readonly', 'readonly')

            todoEditButton.style.display = 'none'

            const todoSaveButton = document.createElement('button')
            todoSaveButton.classList.add('save')
            todoSaveButton.innerHTML= 'Save'
            todoDiv.append(todoSaveButton)

            
            todoSaveButton.addEventListener('click', function(){
                if(oneTodo.value == ''){
                    alert('Please put in a value')
                    return
                }else{
                    oneTodo.setAttribute('readonly', 'readonly')
                }

                var timeElapsed = Date.now() 
                var today = new Date(timeElapsed)
                dateSpan.innerHTML = today.toLocaleString() 

                todoSaveButton.style.display = 'none'
                todoEditButton.style.display = 'inline-block'
            })

            

        })

        todoDeleteButton.addEventListener('click', function(){
            if(confirm('Are you sure you want to delete this?')){
                todoDiv.remove()
               }else{
                return false
               }
        })



    }


  


   
})

//search

document.getElementById('searchInput').addEventListener('keyup', function(event){
    const allTaskWrapper = Array.from(document.querySelectorAll(".todo-box"))
    const allTasks = Array.from(document.querySelectorAll(".todo-input"))
    const searchWord = event.target.value
    if(allTasks.length > 0){
        for (let i = 0; i < allTasks.length; i++) {
            const lowerCase = allTasks[i].value.toLowerCase()
            console.log(lowerCase, searchWord)
            if (lowerCase.includes(searchWord)) {
                //console.log(allTasks[i].value, searchWord)
                allTaskWrapper[i].style.display = 'block'
            }else{
                allTaskWrapper[i].style.display = 'none' 
            }
        }
    }
})



// const timeElapsed = Date.now()  
// const today = new Date(timeElapsed)
// todoObj.todo = inputText.value 
// todoObj.time = today.toUTCString()