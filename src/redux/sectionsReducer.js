import game from "../images/video-game.png";
import work from "../images/sim-card.png";
import rest from "../images/hourglass.png";
import camping from "../images/location.png";
import add from "../images/add.png";
import {NEW_CATEGORY} from "./types";

const InitialState={
    state: [
        {id:1, text:"Gaming", image: game},
        {id:2, text:"Working", image: work},
        {id:3, text:"Rest", image: rest},
        {id:4, text:"Location", image: camping},
        {id:5, text:"Add category", image: add, func: addNew}
    ]
}

function addNew(){
    const el = document.getElementById("popup")
    el.className += " popup_open"
}

export const SectionsReducer = (state = InitialState, action) => {
    switch (action.type){
        case NEW_CATEGORY:
            let obj = {id: Date.now(), text: action.payload, image: work}
            return {...state, state: [...state.state, obj] }
        default: return state
    }
}