//import logo from './logo.svg';
import '../App.css';
import React from "react";
import firebase from '../../firebaseRef';

function HomePage() {

  const [user, setUser] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const [hasAccount, setHasAccount] = React.useState(false)

  function onLogout(event) {
    firebase.auth().signOut()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home Page</h1>
        <button onClick={onLogout}>Logout</button>
      </header>
    </div>
  );
}

export default HomePage;
