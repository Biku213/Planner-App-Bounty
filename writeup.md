# Planner App (MyCustomWidget) 
- Todo List Widget

I have added a custom widget to the Planner App, which is a Todo List Widget. Here's the rationale behind choosing the Todo List Widget:

Organization and Task Management:
- The Todo List Widget provides users with a convenient way to manage their tasks and stay organized within the planner app. It allows users to create, update, and track their tasks effectively.

Productivity Enhancement:
- By incorporating a Todo List Widget, the planner app aims to enhance users' productivity. Users can easily add tasks, set priorities, mark completed tasks, and track their progress, helping them stay focused and accomplish their goals.

Task Tracking and Progress Monitoring:
- The Todo List Widget enables users to track their tasks and monitor their progress. By displaying the total number of tasks and completed tasks count, users can get a visual representation of their achievements and remaining workload.

User Engagement and Retention:
- Including interactive elements like the Todo List Widget increases user engagement and retention in the planner app. It provides a practical and useful tool for users to manage their tasks, making the app more valuable and encouraging users to continue using it.

Personalization and Customization:
- The Todo List Widget allows users to personalize their planner app experience by customizing their task lists. Users can add, edit, and delete tasks based on their specific needs and preferences.



# How the Todo List Widget works:

1. Task Management:
   - The widget starts with an empty task list.
   - Users can input their tasks in the task input field and add them to the list by clicking the "Add" button or pressing the Enter key.
   - The `handleAddTask` function is called to handle the addition of tasks to the list. It checks if the task input is not empty and updates the list accordingly.
   - Users can also edit and delete tasks by clicking the corresponding buttons for each task.

2. Task Display and Styling:
   - Tasks are displayed as a list of items, with each task item containing the task text and action buttons for toggling task completion, editing, and deletion.
   - Completed tasks are visually differentiated from active tasks by applying a CSS class or style to indicate their completion status.

3. Task Count and Completion Tracking:
   - The widget displays the total number of tasks and the number of completed tasks.
   - The task counts are updated dynamically as tasks are added, completed, or deleted.
   - The `handleToggleTask` and `handleDeleteTask` functions are responsible for updating the task completion status and counts accordingly.

4. Task Filtering:
   - Users can toggle a checkbox to show or hide completed tasks.
   - The `handleToggleShowCompleted` function is called to update the state of the showCompleted variable, which determines whether completed tasks are displayed or not.
   - The `filteredTasks` variable is used to filter the task list based on the showCompleted state.

5. Resetting the Task List:
   - Users can reset the task list and start afresh by clicking the "Reset Tasks" button.
   - The `handleResetTasks` function is called to reset the task list, clear the input field, and update the task counts accordingly.

By providing task management functionality, task display and styling, task counts and completion tracking, task filtering, and reset functionality, the Todo List Widget offers a comprehensive and user-friendly tool for organizing and managing tasks within the Planner App.

## Code Structure

The code for the Todo List Widget follows a functional component structure using React and utilizes various React hooks for managing state and handling user interactions. Here's an overview of the code structure:

1. Importing Dependencies:
   - The code begins with importing the necessary dependencies, including React and the required hooks (useState, useCallback).

2. TaskItem Component:
   - Inside the code, there is a separate TaskItem component defined using the React.memo function.
   - The TaskItem component represents an individual task item in the task list.
   - It receives props such as task, index, handleToggleTask, handleEditTask, and handleDeleteTask to handle user interactions with the task item.

3. TodoListWidget Component:
   - The TodoListWidget component is the main component that represents the Todo List Widget.
   - It is exported as the default component.
   - The component starts with defining the initial state variables using the useState hook.
   - The state variables include tasks (the array of tasks), taskInput (for managing the input field value), editIndex (to track the index of the task being edited), showCompleted (to toggle the display of completed tasks), totalTasksCount (to keep track of the total number of tasks), and completedTasksCount (to track the number of completed tasks).

4. Event Handlers:
   - The component defines several event handler functions using the useCallback hook.
   - These event handlers include handleTaskInputChange (to handle changes in the task input field), handleAddTask (to add tasks to the task list), handleResetTasks (to reset the task list), handleKeyDown (to handle the "Enter" key press), handleToggleTask (to toggle the completion status of a task), handleDeleteTask (to delete a task), handleEditTask (to edit a task), and handleToggleShowCompleted (to toggle the display of completed tasks).

5. Rendering:
   - The component renders the Todo List Widget UI.
   - It includes HTML elements such as heading (h2), the task input field, a button to add tasks, and the totalTasksCount and completedTasksCount paragraphs.
   - It also renders a checkbox to toggle the display of completed tasks.
   - The task list is rendered using the ul element and a map function to iterate through the tasks array.
   - Each task item is rendered using the TaskItem component, passing the necessary props and event handlers.

6. Export:
   - Finally, the TodoListWidget component is exported as the default export to be used in other parts of the application.

The code structure separates the task item logic into a separate component (TaskItem) for better reusability and readability. The TodoListWidget component handles the overall state management, event handling, and rendering of the Todo List Widget. The functional components and React hooks are used to leverage the power of React for building interactive and maintainable code.
