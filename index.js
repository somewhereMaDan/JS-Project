let todos = [];

function createTodo(title,dueDate,id){
  
  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  });
}

function add_todo(){

  const textBox = document.getElementById('todo-title');
  const title = textBox.value;

  const DatePicker = document.getElementById('date-picker');
  const dueDate = DatePicker.value.replace('T',' <> ');

  const id = ' ' + new Date().getTime();

  createTodo(title,dueDate,id);

  render();
}

function removeTodo(idToDelete){

  todos = todos.filter(function(todo){

    if(todo.id === idToDelete){
      return false;
    }else{
      return true;
    }
  });
}

function deleteTodo(event){
  let deleteButton = event.target;
  let idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
}

function render(){

  todos.forEach(function (todo){
    let element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    let delete_Button = document.createElement('button')
    delete_Button.innerText = 'X';
    delete_Button.style = 'margin-left: 10px';
    delete_Button.onclick = deleteTodo;
    delete_Button.id = todo.id;
    element.appendChild(delete_Button);

    let todolist = document.getElementById('on-hand');
    todolist.appendChild(element);
    
    
  });
}