import React, {useEffect, useState} from "react";
import "./index.css"

function SearchField(){
    const [string, setString] = useState("")

    useEffect(()=> {
        if(string!==""){
            let list = document.querySelectorAll("div, p")
            for(let i=0; i< list.length; i++){
                if(list[i].innerHTML.toLowerCase()===string.toLowerCase()){
                    list[i].className += " temp"
                }
                else if(list[i].className.includes(" temp")){
                    list[i].className -= " temp"
                }
            }
        }
    }, [string])

    return(
        <input type="text"
               className="search_field"
               placeholder="Search"
               onChange={event => setString(event.target.value)}
               value={string}
        />
    )
}

export default SearchField