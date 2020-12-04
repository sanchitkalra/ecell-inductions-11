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
        <h1>E-Cell BITS Pilani, Hyderabad Campus</h1>
        <div className="post">
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FeCELL.BPHC%2Fposts%2F10158532076440102&show_text=true&width=552&appId=286370375084097&height=546" width="552" height="546" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder={0} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
        </div>
        <div>
          <label>
            <p>Over the past two years, I got interested/inspired to launch my startup. I had tried to bootstrap my startups, one a language learning app and second a grocery shopping app. Keeping this in view, I participated in many startup events and studied to gain an understanding of the startup ecosystem and various stages of building a company. I have got some insight into the process, challenges and issued faced by entrepreneurs from the ideation stage to public rollout. To name a few, conducting a feasibility study, designing a business model, finding investors & raising funds, prototype development, scalability, optimization.  Being part of the E-Cell would help me in exchanging knowledge and experience as I would be working closely with other entrepreneurs in the BITS ecosystem. This way I would be a help to others and at the same time, would learn more to be able to launch my startup in future.</p>
          </label>
        </div>
        <button onClick={onLogout}>Logout</button>
      </header>
    </div>
  );
}

export default HomePage;
