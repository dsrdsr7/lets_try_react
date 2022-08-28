import React, {useState} from "react";
import game from "../images/video-game.png";
import work from "../images/sim-card.png";
import rest from "../images/hourglass.png";
import camping from "../images/location.png";
import add from "../images/add.png";
import SectionElement from "../SectionElement";

const [array, setArray] = useState([
    {id:1, text:"Gaming", image: game},
    {id:2, text:"Working", image: work},
    {id:3, text:"Rest", image: rest},
    {id:4, text:"Location", image: camping},
    {id:5, text:"Add category", image: add, func: addNew}
])

const [sectionItems, setSection] = useState(array.map((el) =>
    <SectionElement key={el.id} text={el.text} image={el.image} func={el.func}/>))

function changeArr(name){
    setArray(array.splice(array.length-1, 0,
        {id: array[array.length-1].id, text: name, image: work}));
    setArray(()=>{
        const el = array.pop();
        el.id++
        array.push(el);
    })
    setSection(array.map((el) =>
        <SectionElement key={el.id} text={el.text} image={el.image} func={el.func}/>))
}

function addNew(){
    const el = document.getElementById("popup")
    el.className += " popup_open"
}