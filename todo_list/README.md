
# Todo List Application

This Todo List application is a simple project built using React to manage tasks efficiently. The app allows users to create, update, and delete tasks, and categorize them based on their status (Start, Progress, Done).

## Features

- **Add New Tasks**: Users can add new tasks with a title, content, and status.
- **Update Existing Tasks**: Users can edit the details of existing tasks.
- **Delete Tasks**: Users can delete tasks that are no longer needed.
- **Categorize Tasks**: Tasks are categorized into three panels based on their status: Start, Progress, and Done.

## Project Structure

- `index.js`: The entry point of the application. It sets up the React app and renders it to the DOM.
- `App.js`: The main component that includes the form and the panels.
- `Form.js`: A form component for adding or updating tasks.
- `Panel.js`: A component to display tasks based on their status.
- `PanelCardItem.js`: A component to render individual tasks with options to edit or delete.
- `form_hooks.js`: A custom hook to provide access to the form context.
- `form_context.js`: The context provider that manages the state and methods for handling form actions and Todo List updates.
- `index.css`: Contains Tailwind CSS imports for styling.

## What I've Learned

### React Basics

- **Components**: Learned how to create and manage components in React.
- **State Management**: Used `useState` for managing component state.
- **Context API**: Utilized the Context API to manage and share state across components.
- **Custom Hooks**: Created a custom hook (`useFormContext`) to simplify access to context.

### JavaScript

- **ES6 Syntax**: Gained experience with modern JavaScript features such as arrow functions, destructuring, and template literals.
- **Modules**: Learned how to organize code into modules and import/export them.

### CSS and Styling

- **Tailwind CSS**: Used Tailwind CSS for styling components and learned about utility-first CSS framework.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

The application will start on \`http://localhost:3000\`.

## Demo

Here's a demo video showcasing the features of the Todo List application:

https://github.com/user-attachments/assets/202feb18-f119-4c46-93f8-6e834b4ac57b



## Future Improvements

- **User Authentication**: Implement user authentication to allow multiple users to manage their tasks.
- **Drag and Drop**: Add drag-and-drop functionality to move tasks between categories.
- **Due Dates and Reminders**: Include due dates for tasks and reminders.
- **API Integration**: Save tasks to a backend server or a database.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Thank you for checking out my Todo List application! I hope you find it useful and educational.
