//import logo from './logo.svg';
import '../App.css';
import React from "react";
import firebase from '../../firebaseRef';

function HomePage() {

  function onLogout(event) {
    firebase.auth().signOut()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home Page</h1>
        <div className="post">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FeCELL.BPHC%2Fposts%2F10158532076440102&show_text=true&width=552&appId=286370375084097&height=546" width="552" height="546" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder={0} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
        </div>
        <div>
          <label>
            <p>I feel I deserve to be a part of BPHC </p>
          </label>
        </div>
        <button onClick={onLogout}>Logout</button>
      </header>
    </div>
  );
}

export default HomePage;
