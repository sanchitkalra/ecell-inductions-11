//import logo from './logo.svg';
import '../App.css';
import React from "react";

function LoginPage(props) {

  const {
    onLogin, emailError, passwordError, setCurrentRoute
  } = props

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function onLoginPress(event) {
    event.preventDefault()
    onLogin(email, password)
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
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            ></input>
          </label>
          <label><p>{emailError}</p></label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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
