This is a ReactJS app.
To run this website:

1)cd into the root folder "./portfolio" and type "npm install" to install the dependencies the project uses.

2)run "npm run start" to run the app. (on localhost:3000).

3)cd into ./src/images and run "http-server ./" to be able to load the images. (chrome doesn't let uploading local files because of security issues, so this command runs a server that stores the project assets).

Form validation:
The form validates:
    * That the name is indeed a valid name using regEx.
    * That email contains a '@' character.
    * That the phone number is an Integer that contains 10 characters.

As this is a ReactJS app the entire site is functional using JS.
