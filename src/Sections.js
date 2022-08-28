import React from "react";
import "./index.css";
import SectionElement from "./SectionElement";
import {connect} from "react-redux"

const styles={
    fontSize: "15px",
    height: "30px",
    paddingTop: "15px",
    paddingLeft: "20px",
    fontWeight: "bold"
}

function Sections(props) {
    const listItems = props.sections.map((el) =>
        <SectionElement key={el.id} text={el.text} image={el.image} func={el.func}/>)

    return (
        <div>
            <div style={styles}>
                Explore
            </div>
            <ul className="list_sections">
                {listItems}
            </ul>
        </div>
    )
}

const a = state => {
    return {
        sections: state.sections.state
    }
}

export default connect(a, null) (Sections)