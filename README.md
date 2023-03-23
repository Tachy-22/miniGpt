# quizGrad

quizGrad is a single-page web application built with ReactJS, TailwindCSS, and Firebase. The main feature of the app is to provide users with a quiz where the user can choose a category and answer 5 multiple-choice questions related to that category.
## Features

The following are the main features of quizGrad:

    Home Page: Users land on the homepage which provides an overview of the app and a call to action to start taking the quiz.
    Login Page: Users can log in or create an account to start the quiz. Firebase's authentication service is used to manage user accounts.
    Category Selection Page: After logging in, users can select a category from a dropdown list to start the quiz. The available categories are displayed in the dropdown list.
    Question Answering Page: After selecting a category, the user is presented with 5 multiple-choice questions related to the selected category. Each question has 4 options to choose from. The user can select only one option. When the user submits all 5 questions, the app calculates and displays the score along with a message.

## Installation

To run quizGrad, follow these steps:

    Clone or download the repository.
    Open a terminal in the project directory and run npm install to install all the dependencies.
    Set up a Firebase project and replace the Firebase configuration in src/firebase.js.
    Run the app using npm start.

## Usage

To use quizGrad, follow these steps:

    Open the app in a web browser.
    Click the "Login" button to create an account or log in to an existing one.
    Select a category from the dropdown list and click "Start Quiz".
    Answer all 5 questions and click "Submit".
    The app will calculate the score and display it with a message.

## Contributing

Contributions to quizGrad are always welcome. If you find any issues or want to improve the app, feel free to create a pull request.
