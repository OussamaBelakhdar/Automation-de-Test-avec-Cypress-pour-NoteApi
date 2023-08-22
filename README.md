# Automation-de-Test-avec-Cypress-pour-NoteApi
Cypress Testing for Notes API
This project includes a suite of Cypress tests to validate the functionality of the Notes API.

Table of Contents
Setup
Tests
Test Data
Running the Tests
Contributing

## Setup
Before you run the tests, make sure you have the following installed:

Node.js
Cypress
After you have Node.js and Cypress installed, clone the repository:


git clone <repository_url>
Change to the project directory:

cd <repository_directory>

## Tests
This project includes the following test suites:

Server Health Test: Verifies that the server is running and returns the expected status and message.
User Registration Test: Validates the user registration functionality with a successful scenario.
User Login Test: Validates the user login functionality with a successful scenario.
New Note Posting Test: Tests the functionality of posting a new note and verifies the appropriate response for both authenticated and unauthenticated users.
Test Data
The tests use the faker library to generate random user data for the registration and login tests. The note data for the new note posting test is stored in the noteData fixture.

## Running the Tests
To run the tests, execute the following command in the project directory:

npx cypress run
Cypress will run the tests and display the results in the terminal.

## Contributing
If you'd like to contribute to this project, please submit a pull request or create an issue for any bugs or feature requests.

## License
This project is open source and available under the MIT License.

## Contact
If you have any questions or comments, please contact the repository owner at oussamabelakhdar@gmail.com.

This README provides information about the tests, the test data, and instructions for running the tests. It also includes information about contributing to the project, licensing, and contact details. You can customize this README to fit your project by replacing the placeholders with the appropriate information.
