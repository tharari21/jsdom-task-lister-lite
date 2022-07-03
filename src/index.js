document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // - As a user, I should be able to type a task into the input field.

  // - As a user, I should be able to click some form of a submit button.

  // - As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

  // Getting input tag where user enters task
  const input = document.querySelector("#new-task-description");
  // const input = document.getElementById("new-task-description");

  // Get ul element that stores tasks
  const taskList = document.querySelector("#tasks");
  // const taskList = document.getElementById('#tasks');

  // Get form
  const form = document.querySelector("#create-task-form");
  // let form = document.getElementById("create-task-form");

  form.addEventListener("submit", (e) => {
    // Prevent default behavior of refreshing the page
    e.preventDefault();

    // Create li tag
    const li = document.createElement("li");
    // Get user input text
    const userInput = input.value;
    input.value = "";

    // add user input text to li tag
    li.textContent = userInput;

    // Create a delete button using document.createElement
    const deleteBtn = document.createElement("button");
    // Give the button some text maybe an "X"
    deleteBtn.textContent = "X";
    // Give the button functionality - use event listener
    const deleteTask = (e) => {
      li.remove();
      // e.target.parentElement.remove();
    };
    deleteBtn.addEventListener("click", deleteTask);

    // Append button to li tag

    li.append(deleteBtn);

    // Adding li to taskList
    taskList.append(li);
  });

  // Adding event listener by passing a separate callback function

  // const submitHandler = (e) => {
  //   // Prevent default behavior of refreshing the page
  //   e.preventDefault();

  //   // Create li tag
  //   const li = document.createElement("li");
  //   // Get user input text
  //   const userInput = input.value;
  //   userInput = "";

  //   // add user input text to li tag
  //   li.textContent = userInput;

  //   // Adding li to taskList
  //   taskList.append(li);
  // }

  // form.addEventListener('submit', submitHandler)

  // - A delete function that will remove tasks from your list

  // - A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
  //   - As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
  // - An additional input field (e.g. user, duration, date due)
  // - Ability to edit tasks
  // - Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
});
