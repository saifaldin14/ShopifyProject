# Project URL

https://shopifyproject.herokuapp.com

## Project Overview

Space-tagram is a web app that accesses NASA's APOD API to fetch astronomy images and data for a specified date period

## Technologies Used with the Project

1. React to create the UI
2. Redux for state management (I designed this project with scalability in mind, therefore I wanted to utilize Redux to allow the project to be easily extended in the future)
3. Redux Saga to automatically fetch data when the web page is loaded
4. Axios to fetch data from the API
5. React Router for dynamic routing that is used to generate shareable links for each image
6. Lottie to display a pleasant and beautiful loading animation
7. JSDoc for documentation of each function used within the project

## Features of the Project

1. Fetch NASA data using axios
2. Display the resulting data in a dynamic feed that includes the image, title, explanation and date of the picture
3. Allows the user the ability to like and unlike their favourite post

## Extra Features Included

The following extra features were specified in the challenge specifications

Extra features that were included are:

1. Saving likes to local storage so that the user can view their likes if they refresh or close the session
2. Animated like button (shows a ripple effect when pressed)
3. Displaying a loading state while waiting for the API to return the data (utilized a Lottie animation)
4. The web app automatically generates a shareable link for each image that can be viewed on a separate page using dynamic routing from React Router
5. Includes a date-picker that allows the user to fetch photos between customized start and end dates

## Additional Features Included

The following features were not explicitly specified in the challenge specifications but increase the user experience while using the app.

Additional features included in the project are:

1. Completely responsive web design
2. Documentation for the project using JSDoc
3. When no date is specified the app will automatically select the first day of the current month and fetch data between the first day of the month and the current date.
   (E.g. On September 11th, 2021 the app will display data within September 1st, 2021 - September 11th, 2021)
4. Hides the picture description in an accordion view
5. Allows the user to visit the shareable link for the image on a separate tab
6. Allows the user to copy the shareable link to their clipboard
7. Includes error handling for selecting incorrect or invalid dates
8. Creates a custom linear gradient colour for the titles
9. Automatically clears local storage when user alters specified dates (so that new posts aren't liked by default)
