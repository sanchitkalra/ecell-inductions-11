//import logo from './logo.svg';
import './App.css';
import {React, useEffect, useState} from "react";
import firebaseRef from '../../firebaseRef';
import LoginPage from '../LoginPage'
import CreateAccPage from '../CreateAccPage'
import HomePage from '../HomePage'

function App() {

  const [user, setUser] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const [hasAccount, setHasAccount] = React.useState(false)

  function clearInputs() {
    setEmail('')
    setPassword('')
  }

  function clearInputErrors() {
    setEmailError('')
    setPasswordError('')
  }

  function onLogin(event) {
    clearInputErrors()
    console.log(email, " ", password)
    firebaseRef.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(error.message)
          break
        case "auth/invalid-password":
          setPasswordError(error.message)
          break
      }
    })
    event.preventDefault()
  }

  function onCreateAcc(event) {
    clearInputErrors()
    console.log(email, " ", password)
    firebaseRef.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message)
          break
        case "auth/weak-password":
          setPasswordError(error.message)
          break
      }
    })
    event.preventDefault()
  }

  function authListener() {
    firebaseRef.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user)
        } else {
          setUser('')
        }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <div className="App">
      {user ? <HomePage /> :
            <LoginPage 
                email = {email}
                setEmail = {setEmail}
                password = {password}
                setPassword = {setPassword}
                onLogin = {onLogin}
                emailError = {emailError}
                passwordError = {passwordError}
                hasAccount = {hasAccount}
                setHasAccount = {setHasAccount}
            />
        }
    </div>
  );
}

export default App;
