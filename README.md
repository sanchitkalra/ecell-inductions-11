# This project is my submission for the E-Cell Inductions for Semester 1.

A live preview of the app is available at [https://ecell-inductions-11.herokuapp.com/](https://ecell-inductions-11.herokuapp.com/)

**Note**: You may see a delay in the website loading time, this happens because Heroku sends the app in an inactive state when it has not been in use for over 30 minutes. Subsequent loads should work properly.

**Note**: You'll need to be signed to an actual account to access the Home Page

## Technologies used
 - React
 - Firebase Authentication
 - Heroku

To use the project, change the `firebaseConfig.js` file with your own config obtained from the Firebase Console in the format below
```
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

export default firebaseConfig;
```

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.