import React from "react";
import "./index.css";

const containerStyleBot={
    width: "270px",
    height: "75px",
    paddingLeft: "5px"
}

const containerStyleRight={
    width: "120px",
    height: "140px",
    paddingTop: "30px",
}

function Card(props){
    let classType = "first_container"
    let containerType = containerStyleBot
    if(props.orientation==="right"){
        classType = "container"
        containerType = containerStyleRight
    }
    return(
        <div className={props.class}>
            <div className={classType}>
                <div style={containerType}>
                    <p style={{fontWeight: "bold", fontSize: "17px", margin:"0"}}>{props.title}</p>
                    <p style={{marginTop: "5px", marginBottom: "0px"}}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card