import React, {useState} from "react";
import "./index.css";
import {connect} from 'react-redux'
import {createCategory} from "./redux/actions";

const styles={
    margin: "15px",
    fontSize: "20px",
    fontWeight: "bold",
}

const styles2={
    margin: "10px",
    width: "250px",
    height: "20px",
    background: "none",
    color: "white",
    textAlign: "center",
}

function closePop(){
    const el = document.getElementById("popup")
    el.className = "popup"
}

function Popup(props){
    const [string, setString] = useState('')
    const [drag, setDrag] = useState(false)

    function createButton(event){
        event.preventDefault()
        if(string.trim()!=='') {
            props.createCategory(string)
            setString('')
            closePop()
        }
    }

    function dragStartHandler(e){
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e){
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e){
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files)
        setDrag(false)
    }


    function handleFiles(files) {
        let d = document.getElementById("fileList");
        if (!files.length) {
            d.innerHTML = "<p>No files selected!</p>";
        } else {
            let list = document.createElement("ul");
            d.appendChild(list);
            for (let i=0; i < files.length; i++) {
                let li = document.createElement("li");
                list.appendChild(li);

                let img = document.createElement("img");
                img.src = window.URL.createObjectURL(files[i]);
                img.height = 60;
                img.onload = function() {
                    window.URL.revokeObjectURL(this.src);
                }
                li.appendChild(img);

                let info = document.createElement("span");
                info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
                li.appendChild(info);
            }
        }
    }

    return(
        <div className="popup" id="popup">
            <div className="what" onClick={closePop}></div>
            <div className="popup_body">
                <div className="popup_content">
                    <div><button className="popup_close" onClick={closePop}>x</button></div>
                    <div className="title" style={styles}>Choose the category name</div>
                    <input type="text" placeholder="Name" onChange={event => setString(event.target.value)} value={string} style={styles2}/>
                    {drag ?
                        <div className="drop-area"
                            onDragStart={e => dragStartHandler(e)}
                             onDragLeave={e => dragLeaveHandler(e)}
                             onDragOver={e => dragStartHandler(e)}
                             onDrop={e => onDropHandler(e)}>
                            Drop file</div>
                        : <div
                            onDragStart={e => dragStartHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragOver={e => dragStartHandler(e)}>
                            Drag here</div>
                    }

                    <div id="fileList"></div>
                    <div><button type="submit" onClick={createButton} className="confirm_but">Confirm</button></div>
                </div>
            </div>
        </div>
    )
}

const b = {
    createCategory
}

export default connect(null, b) (Popup)