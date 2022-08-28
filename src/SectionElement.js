import React from "react";
import "./index.css";


const styles ={
    marginTop: '15px',
    marginLeft: "10px",
    float: "left",
    width: "24px",
    height: "24px"
}

const styles2={
    display: "inline-block",
    marginTop: "15px",
    marginLeft: "-15px"
}

function SectionElement(props){
    const {text, image, func} = props

    return(
        <div className="secbut" onClick={func}>
            <img src={image} alt="sorry" style={styles}/>
            <div style={styles2}>{text}</div>
        </div>
    )
}

export default SectionElement