# Project Name

Movies Saga App

## Description
The Movie Sagas application is a movie application that displays existing movies within an SQL database. This app gives you the option to select a movie by clicking on it's image and takes you to a details page. From that page, you have the option to edit title and description of the movie as you wish. Once you click the edit button, you will be taken to the corresponding movies' edit page. There you will have the option to update title and description. After changes are made, you will be redirected to the homepage and the changes will appear via your database (sql). If you decide to cancel your changes while on the edits page, it will redirect you back to the details page of that move. Have fun browsing!

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