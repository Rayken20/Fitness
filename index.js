//to ensure that javaScript  code executes when the DOM is fully loaded.
//Any code related to DOM manipulation should either go in pro or in a function called within pro.
const pro = () => {
// Get the form element and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', addGoal);


// API base URL
const apiUrl = 'http://localhost:3000/exercises';

// Function to handle form submit and add goal to the database. Prevent the page from being refreshed immediately and allow us to do something else instead.
function addGoal(event) {
  event.preventDefault();

  // Get the input values
  const goalNameInput = document.getElementById('goalName');
  const descriptionInput = document.getElementById('description');
  const deadlineInput = document.getElementById('deadline');
  // Create an object with the data from the inputs
  const goalName = goalNameInput.value;
  const description = descriptionInput.value;
  const deadline = deadlineInput.value;

  // Create a new goal object
  const goal = { goalName, description, deadline };

  // Get the ul element where goals will be displayed
const goalsList = document.getElementById('goalsList');
goalsList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    const goalId = event.target.dataset.goalId;
    deleteGoal(goalId);
  }
});

  // Make a POST request to the server to add the goal to the database
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goal),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to add goal');
    }
    return response.json();
  })
  .then(addedGoal => {
    // Retrieve the added goal from the server and display it in the UI
    displayGoal(addedGoal);
  })
  .catch(error => {
    console.error('Error adding goal:', error.message);
  });

  // Clear the input fields
  goalNameInput.value = '';
  descriptionInput.value = '';
  deadlineInput.value = '';
}

  // Call the getGoals function when the page loads to display existing goals
  getGoals();

// Function to handle the custom button click event
function onButtonClick() {
  alert('Button clicked!');
 
}

// Add event listeners
document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

const customButton = document.getElementById('customButton'); // Replace 'customButton' with the actual ID of your button
customButton.addEventListener('click', onButtonClick);

// Function to get all goals from the server and display them on the page
function getGoals() {
  // Make a GET request to the server to retrieve goals
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to retrieve goals');
    }
    return response.json();
  })
  .then(goals => {
    // Retrieve the goals from the server and display them
    goals.forEach(displayGoal);
  })
  .catch(error => {
    console.error('Error retrieving goals:', error.message);
  });
}

// Function to display a single goal on the page
function displayGoal(goal) {
  const li = document.createElement('li');
  li.classList.add('card');
  li.id = `goal-${goal.id}`; // Set an ID for the list item
  li.innerHTML = `
  <h3>${goal.goalName}</h3>
  <p>${goal.description}</p>
  <p>${goal.deadline}</p>
  <button class="delete-button" data-goal-id="${goal.id}">Delete</button>
`;
 // Add click event listener to display individual item
 li.addEventListener('click', function() {
  displayIndividualItem(goal);
});
  goalsList.appendChild(li);
}
function displayIndividualItem(goal) {
  // Assuming you have an element to display individual items
  const individualItemContainer = document.getElementById('individualItemContainer');

  // Clear the container before displaying a new item
  individualItemContainer.innerHTML = '';

  // Create elements to display individual item
  const individualItem = document.createElement('div');
  individualItem.innerHTML = `
    <h3>${goal.goalName}</h3>
    <p>${goal.description}</p>
    <p>${goal.deadline}</p>
    <img src="${goal.photoUrl}" alt="${goal.goalName} Photo">
  `;

  // Append the individual item to the container
  individualItemContainer.appendChild(individualItem);
}

// Function to delete a goal by ID
function deleteGoal(id) {
  // Make a GET request to the server to retrieve goal details
  fetch(`${apiUrl}/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to retrieve goal details');
      }
      return response.json();
    })
    .then(goal => {
      // Make a DELETE request to the server to delete the goal
      fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      })
        .then(deleteResponse => {
          if (!deleteResponse.ok) {
            throw new Error('Failed to delete goal');
          }

          // Remove the deleted goal from the UI
          const goalItem = document.getElementById(`goal-${id}`);
          if (goalItem) {
            goalItem.remove();
          }

          // Delete the associated photo (assuming goal.photoUrl is the photo URL)
          deletePhoto(goal.photoUrl);
        })
        .catch(error => {
          console.error('Error deleting goal:', error.message);
        });
    })
    .catch(error => {
      console.error('Error retrieving goal details:', error.message);
    });
}

function deletePhoto(photoUrl) {
  
  
}

// Call the getGoals function when the page loads to display existing goals
getGoals();
}
document.addEventListener('DOMContentLoaded', pro);