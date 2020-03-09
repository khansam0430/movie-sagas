# Project Name

Saga Movies Page

## Description
This project is a Feedback app which allows users to input their feedback. This app will open up to a feedback "home" page and has buttons to fill out the form. There are 4 components to this form which ask different questions and give the ability to go back to the previous question if desired to update their answer. The user also has capability to enter in comments as well. This app also has a review page in which users can review the information they have entered prior to submitting their feedback into the SQL Feedback Database. The submission page gives a confirmation that their code has been submitted and offers a button to leave new feedback-which loops back to the first page. Material UI has been incorporated in the buttons for aesthetic purposes as well.

## Languages and Software Used 
<li>React</li> 
<li>Redux</li>
<li>Sagas</li>
<li>Node</li>
<li>Nodemon</li>
<li>Postico</li>
<li>Postgresql</li>
<li>Body-Parser</li>
<li>Express</li>

## Installation 
1. Install nodemon globally in your terminal by running the command "npm install nodemon --global".
2. Upon downloading app, in your terminal run "npm install".
3. In your terminal, run "npm install react-router-dom" to add this component into your project file. Set up this component within your project files.
4. In your terminal, run "npm install react-redux" and import this into your project files.
5. To run client side code, run "npm run client".
6. In another terminal tab, spin up server by running "npm run server".
7. Download saga middleware from redux-saga, react logger from redux-logger as needed.

## How to Use App
1. On page load, you will see all movies from the database displayed on the page. You can select any movie poster image on this page to get more details on the movie. This will display on the details page.
2. On the Details page, you have the option to click back to movie list or click to edit the title and descrition on the selected movie.
3. If you are editing the movie details, you will be brought to the Edit page. 
4. Once a new title and description is entered, select the save button to save the updates. You will then be directed to your home page (movies List) and the new title and description will be updated accordingly. This change is also made in your database.
5. If you decide to cancel edits, you will be taken back to the corresponding movies' details page.