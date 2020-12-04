//import logo from './logo.svg';
import '../App.css';
import React from "react";

function CreateAccPage(props) {

  const {
    emailError, passwordError, setCurrentRoute, onCreateAcc
  } = props

  const [tempName, setTempName] = React.useState('')
  const [tempEmail, setTempEmail] = React.useState('')
  const [tempPassword, setTempPassword] = React.useState('')

  function onCreateAccPress(event) {
    event.preventDefault()
    onCreateAcc(tempName, tempEmail, tempPassword)
  }

  return (
      <header className="App-header">
        <form onSubmit={onCreateAccPress}>
          <h1>E-Cell BPHC</h1>
          <h4>Create a new E-Cell Account</h4>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={tempName}
              onChange={e => setTempName(e.target.value)}
              required
            ></input>
          </label>
          <label></label>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={tempEmail}
              onChange={e => setTempEmail(e.target.value)}
              required
            ></input>
          </label>
          <label><p>{emailError}</p></label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={tempPassword}
              onChange={e => setTempPassword(e.target.value)}
              required
            ></input>
          </label>
          <label><p>{passwordError}</p></label>
          <button>Create Account</button> 
          <label></label>
          <label className="navLabel"><a onClick={e => setCurrentRoute(1)}>Have an account? Login</a></label>
        </form>
      </header>
  );
}

export default CreateAccPage;
