//import logo from './logo.svg';
import '../App.css';
import React from "react";

function LoginPage(props) {

  const {
    onLogin, emailError, passwordError, setCurrentRoute
  } = props

  const [tempEmail, setTempEmail] = React.useState('')
  const [tempPassword, setTempPassword] = React.useState('')

  function onLoginPress(event) {
    event.preventDefault()
    onLogin(tempEmail, tempPassword)
  }

  return (
      <header className="App-header">
        <form onSubmit={onLoginPress}>
          <h1>E-Cell BPHC</h1>
          <h4>Login to your account</h4>
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
          <button>Login</button>
          <label className="navLabel"><a onClick={e => setCurrentRoute(2)}>Don't have an account? Create an account</a></label>
        </form>
      </header>
  );
}

export default LoginPage;
