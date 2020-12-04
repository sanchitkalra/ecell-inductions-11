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
        <button onClick={onLogout}>Logout</button>
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FeCELL.BPHC%2Fposts%2F10158250204195102&show_text=true&width=734&appId=286370375084097&height=413" width="734" height="413" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder={0} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
      </header>
    </div>
  );
}

export default HomePage;
