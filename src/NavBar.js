import React from "react";
import {Component} from "react";
import "./index.css";
import NavigationButton from "./NavigationButton";
import v from "./images/041174b40b97c5c4fffb5aa014741cb4.jpg";
import aa from "./images/aa3c1afd6c0f54ad6a20eeb6a06be7e7.jpg";
import dragon from "./images/dragon.jpg";
import button from "./images/glhf.jpg";
import last from  "./images/whatit.jpg";


let array = [
    {image: v, way: "/"},
    {image: aa, way: "/main_content2"},
    {image: dragon, way: "/main_content3"},
    {image: button, way: "main_content4"},
    {image: last, way: "/main_content5"}
]

const listItems = array.map((el, index) =>
    <NavigationButton key={index} image={el.image} way={el.way}/>
);

class NavBar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="hexagon hexagon_mini logo"/>
            <ul className="list">
                {listItems}
            </ul>
        </div>
        )
    }
}

export default NavBar