# Automation-de-Test-avec-Cypress-pour-NoteApi
Cypress Testing for Notes API
This project includes a suite of Cypress tests to validate the functionality of the Notes API.

## Table of Contents
- Setup
- Tests
- Test Data
- Running the Tests
- Contributing

## Setup
Before you run the tests, make sure you have the following installed:

1. Node.js: Cypress is a Node.js module, so you need Node.js to install and run it. If you don't have Node.js installed, you can download it from Node.js website. You can verify your Node.js installation by running the following commands in your terminal:  
`node -v`  
`npm -v`
   
1. Cypress : Cypress is an end-to-end testing framework for web applications. Below is a step-by-step guide on how to install Cypress.
-**Create a new project folder**: If you don't already have a project where you want to add Cypress, create a new folder for your project and navigate into it:  
`mkdir my-new-project`  
`cd my-new-project`    
-**Initialize a new Node.js project**: Run the following command to create a new package.json file. This file will keep track of your project's dependencies, including Cypress.  
`npm init -y`    
-**Install Cypress**: Run the following command to install Cypress as a development dependency:  
`npm install cypress --save-dev`      
This command will add Cypress to your project's node_modules folder and package.json file.
--**Run Cypress for the first time**: After installing Cypress, you can open it by running:  
`npx cypress open`  
This will launch the Cypress Test Runner. The first time you open it, Cypress will create a cypress folder in your project directory. This folder will contain example tests and configurations you can use as a starting point for your tests.  

#### After you have Node.js and Cypress installed 
- clone the repository:
`git clone <repository_url>`
- Change to the project directory:
`cd <repository_directory>`

## Tests
This project includes the following test suites:

-**Server Health Test**: Verifies that the server is running and returns the expected status and message.  
-**User Registration Test**: Validates the user registration functionality with a successful scenario.  
-**User Login Test**: Validates the user login functionality with a successful scenario.  
-**New Note Posting Test**: Tests the functionality of posting a new note and verifies the appropriate response for both authenticated and unauthenticated users.  
## Test Data
- The tests use the faker library to generate random user data for the registration and login tests.  
- The note data for the new note posting test is stored in the noteData fixture.  

## Running the Tests
To run the tests, execute the following command in the project directory:  
`npx cypress run`  
Cypress will run the tests and display the results in the terminal.  

## Contributing
If you'd like to contribute to this project, please submit a pull request or create an issue for any bugs or feature requests.  

## License
This project is open source and available under the MIT License.  

## Contact
If you have any questions or comments, please contact the repository owner at oussamabelakhdar@gmail.com.  

This README provides information about the tests, the test data, and instructions for running the tests. It also includes information about contributing to the project, licensing, and contact details.  
