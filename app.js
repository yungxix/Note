 // Selectors 
 const todoInput = document.querySelector('.todo-input');
 const todoButton = document.querySelector('.todo-button');
 const todoList = document.querySelector('.todo-list');
 const fliterOption = document.querySelector('.filter-todo');
// Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption = document.querySelector('click',filterTodo);


//Functions
 function addTodo(event) {
     //Prevent Default settings of allowing form submition
       event.preventDefault();
   //Todo DIV
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");

   //Create Li
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);

   //CHECK Mark Button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);

   //ADD TODO TO LOCAL STORAGE
 
   //CHECK Trash Button
   const trashButton = document.createElement('button');
   trashButton.innerHTML= '<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
  
    //Append-To-List
 todoList.appendChild(todoDiv);

   //Clear Todo Input VALUE

   todoInput.value = "";

 }
 function deleteCheck(e) {
     const item = e.target;

     //DELETE TODO
     if(item.classList[0] === "trash-btn") {
           const todo = item.parentElement;
            //Animation
           todo.classList.add("fall");
           todo.addEventListener('transitioned', function() {
           todo.remove();
           });
        }


           //CHECK MARK
           if(item.classList[0] === "complete-btn"){
  const todo = item.parentElement;
  todo.classList.toggle('completed');
           }

 }
 

  function filterTodo(e) {
   const todos = todoList.childNodes;
todos.forEach(function(todo) {
   switch (e.target.value){
       case "all":
           todo.style.display = "flex";
           break;
           case "completed":
               if (todo.classList.contains("completed")){
                   todo.style.display = "flex";
   }else{
       todo.style.display = "none";
   }
   break;
   case "uncompleted":
       if(!todo.classList.contains("uncompleted")){
           todo.style.display = "flex";
       }else{
           todo.style.display = "none";
       }
       break;
 }
});
}



/*function saveLocalTodo() {
    var todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos.JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}*/