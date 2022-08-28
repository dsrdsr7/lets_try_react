import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

const styles={
    width: "45px",
    height: "45px",
    borderRadius: "50%"
}

function NavigationButton(props){
    return(
        <Link to={props.way} className="navbut">
         <img src={props.image} alt="Sorry" style={styles}/>
        </Link>
    )
}

export default NavigationButton