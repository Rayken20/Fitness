
# fitnessPro Web app

## Author
Rachael Njoki


### Designing the User Interface
Used HTML and CSS to design a responsive and visually appealing layout. Used css and Bootstrap to make it easier to create the UI.

### Form submission
The code includes an event listener on a form element to capture goal information when submitted.
Upon submission, the data is sent as a POST request to the server for storage in the database.


### displaying goals
Existing goals are retrieved from the server on page load using a GET request.
Each goal is displayed in a list format on the page, including its name, description, deadline, and a 'Delete' button.
Clicking the 'Delete' button triggers a DELETE request to remove the goal from both the server and the UI.

### Individual GOal Display
Clicking on a goal in the list triggers a function to display detailed information about that specific goal.
This includes the goal name, description, deadline, and a placeholder for an image (assumed to be accessible via the 'photoUrl' property).

### Editing Existing Tasks
Add functionality to allow users to edit existing tasks. When the user clicks on an "edit" button for a task, the JavaScript code should retrieve the task data from the db.json file and populate the form fields with the data. When the user submits the updated form, the JavaScript code should send a PUT request to the db.json file to update the task.

## Custom button
A custom button is provided with an associated event listener that triggers an alert when clicked.

### How to use:
### Adding a Goal:
Fill out the form with the goal name, description, and deadline.
Click the 'Submit' button to add the goal to the tracker.

### Viewing Goals:
Existing goals are automatically displayed on page load.
Click on a goal in the list to view detailed information about that goal.

### Deleting a Goal:
Click the 'Delete' button next to a goal to remove it from both the server and the UI.
Custom Button:

### Custom button
Click the custom button to trigger an alert.

### Testing the App
Test the app to make sure it works as expected. You can use a tool like json-server to serve the db.json file and test the app locally.

## Important Note
Ensure that the server at 'https://fitness-fgpb.onrender.com/exercises' is accessible and functional for proper data storage and retrieval.
## Dependencies
The code relies on the Fetch API to communicate with the server for CRUD operations.
The HTML structure has elements with specific IDs, such as 'goalName', 'description', 'deadline', 'goalsList', and 'individualItemContainer'.

## COntributions
Contributions and improvements to the code are welcome. For major changes, please open an issue first to discuss what you would


## Setting Up on VS Code
To set up the project on VS Code, follow these steps:
1. Open VS Code.
2. Click on "File" in the top menu.
3. Click on "Open Folder" and select the folder where you cloned the repo.
4. Install the "Live Server" extension in VS Code.
5. Right-click on the "index.html" file and select "Open with Live Server".

## License
This code is provided under the MIT License..

