let todos = [];
let completeTodos = [];

function createTodo(title,dueDate,id){
  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  });
}

function finishTodo(title1,dueDate1,id1){
  finishTodo.push({
    title1: title1,
    dueDate1: dueDate1,
    id1: id1
  })
}

function add_todo(){

  const textBox = document.getElementById('todo-title');
  const title = textBox.value;

  const DatePicker = document.getElementById('date-picker');
  const dueDate = DatePicker.value.replace('T',' <> ');

  const id = ' ' + new Date().getTime();

  createTodo(title,dueDate,id);
  document.getElementById('todo-title').value = '';
  document.getElementById('date-picker').value = '';

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
  // console.log(idToDelete);

  removeTodo(idToDelete);
  render();
}

function deleteFinishbtn(idfinishbtn){
  completeTodos = completeTodos.filter(function (todo){
    if(todo.id === idfinishbtn){
      return false;
    }else{
      return true;
    }
  });
}
function deleteFinish(event){
  let finishbtn = event.target;
  let idfinishbtn = finishbtn.id;

  deleteFinishbtn(idfinishbtn);
  rerender();
}

function completed(event){
  completeTodos = completeTodos.concat((todos.filter((del) => {
    return (del.id + 'h' === event.target.id);
  })));
  rerender();

  todos = todos.filter((del) =>{
    return !(del.id + 'h' === event.target.id);
  })
  render();
}

function complete(event) {
  const audio=new Audio('sound_comp.wav');
  audio.play();
  if(event.target.checked){
  completed(event); 
  }
}

function render(){

  document.getElementById('on-hand').innerHTML = '';

  todos.forEach(function (todo){
    let element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    let delete_Button = document.createElement('button')
    delete_Button.innerText = 'X';
    delete_Button.style = 'margin-left: 10px';
    delete_Button.onclick = deleteTodo;
    delete_Button.id = todo.id;
    element.appendChild(delete_Button);

    let checkbox = document.createElement('INPUT');
    checkbox.className = 'remove';
    checkbox.setAttribute("type","radio");
    element.prepend(checkbox);
    checkbox.id = todo.id + 'h';
    checkbox.onclick = complete;

    let todolist = document.getElementById('on-hand');
    todolist.appendChild(element);
  
  });
}
function rerender(){

  document.getElementById('completed-task').innerHTML = '';

  completeTodos.forEach(function (todo){
    let element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    let delete_Button1 = document.createElement('button')
    delete_Button1.innerText = 'X';
    delete_Button1.style = 'margin-left: 10px';
    delete_Button1.onclick = deleteFinish;
    delete_Button1.id = todo.id;
    element.appendChild(delete_Button1);

    let checkbox = document.createElement('INPUT');
    checkbox.className = 'remove';
    checkbox.setAttribute("type","radio");
    element.prepend(checkbox);
    checkbox.checked = true;

    let todolist = document.getElementById('completed-task');
    todolist.appendChild(element);

  });
}