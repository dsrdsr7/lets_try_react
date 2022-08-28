import React from "react";
import NavBar from "./NavBar";
import "./index.css"
import Sections from "./Sections";
import SearchComponent from "./SearcComponent";
import MainContent from "./MainContent";
import AccauntInfo from "./AccountInfo";
import Player from "./Player";
import Popup from "./Popup";
import {Outlet} from "react-router";

function App() {
  return (
      <div className="main">
        <div className="navigation">
        <NavBar/>
        </div>
          <div className="sections">
            <Sections/>
          </div>

          <Outlet/>

          <AccauntInfo/>
          <SearchComponent/>
          <Player/>
          <Popup/>
      </div>
  );
}

export default App;
