import React from "react";
import "./index.css";
import Friend from "./Friend";
import geralt from "./images/geralt.jpg"
import vesemir from "./images/vesemir.jpg"
import olgerd from "./images/olgerd.jpg"
import iris from "./images/iris.jpg"
import triss from "./images/triss.jpg"
import yen from "./images/yen.jpg"
import zoltan from "./images/zoltan.jpg"
import jaskier from "./images/лютик.jpg"

const styleForFriend = "friendbut"
const styleForRecomended = "friendbut friendbut_recommended"

let arrayOfObjects=[
    {id:1, text:"5 min ago", name:"Iris von Everec", img: iris},
    {id:2, text:"15 min ago", name:"Olgierd von Everec", img: olgerd},
    {id:3, text:"1 hour ago", name:"Vesemir", img: vesemir},
    {id:4, text:"20 min ago", name: "Geralt of Rivia", img: geralt}
    ]

let arrayOfRecomended=[
    {id:1, text:"5 min ago", name:"Triss Merigold", img: triss},
    {id:2, text:"15 min ago", name:"Yennefer from Vengerberg", img: yen},
    {id:3, text:"1 hour ago", name:"Zoltan", img: zoltan},
    {id:4, text:"20 min ago", name: "Jaskier", img: jaskier}
]

const friendListItems = arrayOfObjects.map((el) =>
    <Friend key={el.id} text={el.text} name={el.name} style={styleForFriend} img={el.img}/>)

const friendListRecomended = arrayOfRecomended.map((el) =>
    <Friend key={el.id} text={el.text} name={el.name} style={styleForRecomended} img={el.img}/>)


function FriendList(props){
    let value;
    props.list==="friends" ?  value=friendListItems : value=friendListRecomended
    return(
        <ul className="list">
            {value}
        </ul>
    )
}

export default FriendList