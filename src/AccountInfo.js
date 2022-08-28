import React from "react";
import "./index.css"
import AccauntAvatar from "./AccauntAvatar";
import FriendList from "./FriendsLIst";

const styles={
    fontSize: '12px',
    opacity: '70%',
    margin: '0 0 10px 0'
}

function AccauntInfo(){
    const userName="Gaunter O'Dimm"
    const userMail="Gaunter@gmail.com"
    return(
        <div className="accountclass">
            <div className="settings">
                <div className="settings_element layers"/>
                <div className="settings_element notifications"/>
                <div className="settings_element email"/>
                <div className="settings_element settingsbut"/>
            </div>
            <div className="account">
            <AccauntAvatar/>
            <p style={{marginBottom: "3px"}}>{userName}</p>
            <p style={styles}>{userMail}</p>
            <p style={{float: "left", margin: "10px"}}>Your Friends</p>
            <FriendList list="friends"/>
            <p style={{float: "left", margin: "10px"}}>Recommendations for you</p>
            <FriendList list="recommended"/>
            </div>
        </div>
    )
}

export default AccauntInfo