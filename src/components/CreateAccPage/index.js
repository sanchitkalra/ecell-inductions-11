//import logo from './logo.svg';
import './App.css';
import React from "react";

function CreateAccPage() {

  return (
      <header className="App-header">
        <form onSubmit={onCreateAcc}>
          <h1>E-Cell BPHC</h1>
          <h4>Create a new E-Cell Account</h4>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            ></input>
          </label>
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
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            ></input>
            <button>Create Account</button> 
          </label>
        </form>
      </header>
  );
}

export default CreateAccPage;
