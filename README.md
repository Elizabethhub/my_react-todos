# React Electron Todo App

This is a simple Todo application built with React and Electron.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [UI Library and External Libraries](#ui-library-and-external-libraries)
- [Additional Notes](#additional-notes)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- Yarn package manager: [https://yarnpkg.com/](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   bash
   Copy code
   git clone https://github.com/Elizabethhub/my_react-todos.git

2. Navigate to the project directory:
   bash
   Copy code
   cd my_react-todos

3. Install dependencies:
   bash
   Copy code
   yarn install

## Running the Application

To run the application locally, follow these steps:

bash
Copy code
yarn electron:serve

This command starts the development server for the React app and launches Electron. It may take a moment for the app to open.

## Usage

- Add a new task by typing in the input field and clicking the "Add" button.
- Toggle task completion by clicking the checkbox next to a task.
- Edit a task by clicking the "Edit" button and modifying the text.
- Remove a task by clicking the "Remove" button.

## UI Library and External Libraries

This project uses:

- React: A JavaScript library for building user interfaces.
- Electron: A framework for building cross-platform desktop applications.
- @electron/remote: Used to enable communication between the main and renderer processes in Electron.
- concurrently: Enables running multiple commands concurrently, used in development scripts.
- electron-builder: Used for building and packaging the Electron app.
- electron-is-dev: A utility to check if the Electron app is in development or production mode.
- Styled Components: A CSS-in-JS library for styling React components.
  Why Styled Components?
  Styled Components was chosen for its simplicity and ease of use. It allows writing CSS directly within JavaScript components, making it easy to manage styles in a component-centric manner.

## Additional Notes

- Todos are saved locally in the userData directory.
- The application is set up to run both the React development server and Electron concurrently during development.
- The build script bundles the React app and packages it with Electron for distribution.
- Make sure to commit the yarn.lock file to version control for consistent builds.
- Feel free to customize and extend the application based on your requirements.

### Contributing

Contributions are welcome! If you find a bug or have a suggestion, please open an issue.

### License

This project is licensed under the MIT License.

This README provides a basic structure with sections such as Getting Started, Technologies Used, Installation, Usage, Contributing, and License.
