# Birthday Tracker Coding Challenge

Read the instructions thoroughly before starting your project.

This app is a simple birthday tracker written using the MERN stack. Users should be able to view a list of all birthdays created, add a birthday to the list, edit a birthday from the list, and delete a birthday from the list. 

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- yarn add bootstrap react-router-dom 
- `cd ..` 
- `touch .env && touch .gitignore`
- yarn add mongoose

Update your `.env` file so that it contains your unique MongoDB Atlas URI with the key `ATLAS_URI`. 

- `yarn dev` to run your server-side and client-side servers

# Coding Challenge Instructions

You are creating a simple app that will help Wyncode keep track of the birthdays of its students and staff using the MERN stack. The project structure has been generated for you, packages that you will need have been installed, and Express boilerplate has been written within `server.js`.

Your task is the following:

Create a models directory and, within it, a `birthday.model.js` file.
- Within `/server/models/birthday.model.js`:
- Your app will need to keep track of four pieces of data: 
    - `username` (string)
    - `cohort_number` (string)
    - `month` (string)
    - `date` (string). 
- All of these fields should be required in order for a birthday to save to the database. 
- You should create a model and schema for your birthday object that reflects this. 

Create a routes directory and, within it, a `/birthdays.js` file.
Within `/birthdays.js`:
- Create a route to a `/birthdays` endpoint that will accept a `GET` request. 
    - This `/birthdays` endpoint should query your database for all of the birthdays that currently exist, and return them as JSON. 
    - Include a `.catch` to display any error messages.
- Create a route to a `/birthdays` endpoint that will accept a `POST` request. 
    - This `/birthdays` endpoint should allow for the creation of a new Birthday, which should then be saved to your database. 
    - Include a `.catch` to display any error messages.
- Create a route to a `/birthdays/:id` endpoint that will accept a `GET` request. 
    - This `/birthdays/:id` endpoint should query the database for the birthday with that particular id, and return it as JSON. 
    - Include a `.catch` to display any error messages.
- Create a route to a `/birthdays/:id` endpoint that will accept a `POST` request. 
    - This `/birthdays/:id` endpoint will query the database for the birthday with that particular id, then should allow user changes into any of the database fields for a birthday to save to your database. 
    - Include a `.catch` to display any error messages.
- Create a route to a `/birthdays/:id` endpoint that will accept a `DELETE` request. 
    - This `/birthdays/:id` endpoint will search for a birthday by its id and delete it from your database. 
    - Include a `.catch` to display any error messages.


Within `/client/src`
- Your app should have a components directory with the following components: `Navbar.js`, `CreateBirthday.js`, `EditBirthday.js`, and `BirthdaysList.js`.
- Your navbar component should allow for client-side navigation between components.
- Users should be able to view a completed list of all birthdays at Wyncode Academy from their BirthdaysList component. 
    - This should be the default view of your app. 
    - The completed list of all birthdays should come from your back end end point, which in turn pulls data from your database.
- A link on your navbar should take users to a different component that contains a form for users to create a new birthday log. 
- When a user creates a new birthday log, it should be saved to your database, and your user should be taken back to the list of all birthdays.
    - This should also force an automatic page reload so that the new birthday that was created also displays. 
- Each birthday log should contain an edit link and a delete link. 
- Clicking on the edit link should take you to a component that contains a form with the data about the birthday that you are editing. 
    - When you click submit, you should be taken back to the list of all birthdays. 
    - The birthday whose data you edited should be udpated to reflect the changes you made. 
- Clicking the delete link should delete the birthday from your database. 
    - You should remain on the list of all birthdays. 
    - The birthday whose delete link you clicked should no longer appear there. 
