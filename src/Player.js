import React from "react";
import "./index.css";


function Player(){
    return(
        <div className="player_block">
            <div className="hexagon hexagon_mini"/>
            <p>Gaunter O'Dimm</p>
            <button type="submit" className="play_button"/>
        </div>
    )
}

export default  Player