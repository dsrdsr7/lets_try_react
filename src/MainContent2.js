import React from "react";
import "./index.css";
import Card from "./Card";

const styles={
    fontSize: "20px",
    marginLeft: "20px"
}

const array1=[
    {title: "Virtual Reality", text: "A community for VR and novices alike", class: "card card_child1"},
    {title: "Game Play", text: "Great place to make new friends", class: "card card_child2"}
]

const list1 = array1.map((el,index) =>
    <Card key={index} title={el.title} text={el.text} class={el.class}/>
)

const array2=[
    {title: "3D Art", text: "A great place to discuss art", class: "card card_child3"},
    {title: "NFT", text: "Everyone can share their NFTs", class: "card card_child4"}
]

const list2 = array2.map((el, index) =>
    <Card key={index} title={el.title} text={el.text} class={el.class} orientation="right"/>
)

const styles2={
    display: "flex",
    justifyContent: "space-between"
}

function MainContent2(){
    return(
        <div className="main_content">
            <div style={styles2}>
                <p style={styles}>Featured Community</p>
                <p style={{marginTop: "20px", marginRight: "20px"}}>See all</p>
            </div>
            {list1}
            <div className="card main_card">Find Your Community on Daccord</div>
            <div style={styles2}>
                <p style={styles}>Popular Right Now</p>
                <p style={{marginTop: "20px", marginRight: "20px"}}>See all</p>
            </div>
            {list2}
            {list2}
            {list2}
        </div>
    )
}

export default MainContent2