import React from "react";
import {Route, Routes} from "react-router";
import App from "./App";
import MainContent from "./MainContent";
import MainContent2 from "./MainContent2";

function AppWrapper(){
    return(
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<MainContent/>}/>
                <Route path="main_content2" element={<MainContent2/>}/>
                <Route path="main_content3" element={<MainContent/>}/>
                <Route path="main_content4" element={<MainContent2/>}/>
                <Route path="main_content5" element={<MainContent/>}/>
            </Route>
        </Routes>
    )
}

export default AppWrapper