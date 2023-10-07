import './todo.css';

// console.log('Hello Great');

const inputDiv = document.body.querySelector('div'); // Selects the Container Div
const addTodoButton = inputDiv.querySelector('button'); // Selects the Add To-Do Button
const uList = inputDiv.lastElementChild; // Selects the Unordered list to fix the to-dos


addTodoButton.addEventListener('click', createTodo); // Calls the EventListener for the Button
addTodoButton.previousElementSibling.addEventListener ('keydown', (event) => {
   if (event.key == 'Enter') {
      createTodo();
   }
}); // Calls the EventListener to launch on the Enter key

function createTodo (event) { // Add ToDo Function
   let input = addTodoButton.previousElementSibling;
   // console.log(uList);
   // console.log(input.value);
   let listTodo = input.value;
   // console.log(listTodo.trim());

   // Create <li>
   let li = document.createElement('li');

   // Set textContent to input
   li.textContent = listTodo.trim();

   // Add a delete button
   let deleteButton = document.createElement('button');

      // Add EventListener For The Remove Button
      deleteButton.addEventListener('click', (event) => {
         if ((confirm('Are you sure You want to delete this todo?')) == true){
           event.target.parentElement.parentElement.remove();
            alert('Todo Removal Successful');
         }
      });

   deleteButton.textContent = 'Remove';
   let span = document.createElement('span');
   span.append(deleteButton);
   li.append(span);

   // Display new ToDo
   uList.append(li);

   // Clear the input tab
   input.value = '';

   // A Single Click On The ToDo Means It Is Completed
   li.onclick = (event) => {
      event.target.classList.toggle('completed'); // The Toggle allows for undoing of an action
   };

   // A Double Click Opens Option To Edit

};