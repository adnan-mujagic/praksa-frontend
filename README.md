# Mediasell
This is the frontend for the website mediasell. It is built using ReactJS (*npx create-react-app*) This is a website where you will be able to register multiple stores from which you can sell a wide array of items, or buy items from other users!

To run on localhost, use the following commands in the terminal:
```
cd front
npm install
npm start
```
> We need to do **npm install** to install all the dependencies before starting/running!


This project is hosted on Vercel. You can access it using this [link](https://mediasell-adnan-mujagic.vercel.app/).

The following routes have been implemented:
- **"/login"** - Here is where you can log in, the app will make an API call to the backend in order to validate your credentials. If the credentials are right, the function will return a token and store it into your *session storage*!
- **"/dashboard"** - This endpoint lists all the posts by all stores from all users that still have items in stock. Each of the posts contains a clickable header which takes you to the page of the store which is selling it.
- **"/user/:id"** - Shows a user profile page, which contains basic information about the users and their stores!
- **"/store/:id"** - Shows a profile page of a particular store.

You can find the backend part for this project on this [link](https://github.com/adnan-mujagic/praksa2k21.git).
