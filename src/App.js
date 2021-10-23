import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./Request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
   return (
      <div className="App">
         {/* <h1>Hey Jarvis Lets Build Netflix-Clone! This is Jarvis</h1> */}
         <Nav />
         <Banner />
         <Row title="NETLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} islargeRow />
         <Row title="Treanding Now" fetchUrl={requests.fetchTrending} />
         <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
         <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
         <Row title="Rommance Movies" fetchUrl={requests.fetchRomanceMovies} />
         <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      </div>
   );
}

export default App;
