//import logo from './logo.svg';
import '../App.css';
import React, {useEffect} from "react";
import firebaseRef from '../../firebaseRef';
import LoginPage from '../LoginPage'
import CreateAccPage from '../CreateAccPage'
import HomePage from '../HomePage'

function App() {

  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  const [currentRoute, setCurrentRoute] = React.useState(1)
  const [user, setUser] = React.useState('')

//   function clearInputs() {
//     setEmail('')
//     setPassword('')
//   }

  function clearInputErrors() {
    setEmailError('')
    setPasswordError('')
  }

  function onLogin(email, password) {
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
        default:
            setPasswordError('Unexpected error')
      }
    })
  }

  function onCreateAcc(name, email, password) {
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
        default:
            setPasswordError('Unexpected error')
      }
    })
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

  function ShowPage() {
    if (user) {
        return <HomePage 
            setCurrentRoute = {setCurrentRoute}
        />
    } else {
        if (currentRoute === 2) {
            return <CreateAccPage
                emailError = {emailError}
                passwordError = {passwordError}
                setCurrentRoute = {setCurrentRoute}
                onCreateAcc = {onCreateAcc}
            />
        } else {
            return <LoginPage 
                onLogin = {onLogin}
                emailError = {emailError}
                passwordError = {passwordError}
                setCurrentRoute = {setCurrentRoute}
            />
        }
    }
  }

  return (
    <div className="App">
      <ShowPage />
    </div>
  );
}

export default App;
