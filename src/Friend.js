import React from "react";
import "./index.css";

const styles={
    fontSize: "10px",
    margin: "1px",
    float: "left"
}

const styles3={
    fontSize: "15px",
    margin: "1px"
}

const styles2={
    width: "40px",
    height: "40px"
}

function Friend(props){
    const {text, name, img} = props
    return(
        <li className={props.style}>
            <div className="hexagon hexagon_logo">
            <img src={img} alt="sorry" style={styles2}/>
            </div>
            <div>
            <p style={styles3}>{name}</p>
            <p style={styles}>{text}</p>
            </div>
        </li>
    )
}

export default Friend