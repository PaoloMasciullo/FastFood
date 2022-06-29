import React, {useState} from "react";
import Header from "../components/layout/Header.js";
import Menu from "./Menu.js";
import {Navigate, Routes} from "react-router";
import {Route} from "react-router-dom";

export default function Main() {
    const [showSidebar, setShowSidebar] = useState(false);

    function onClickSidebar(prop) {
        prop ?
            setShowSidebar(true)
            :
            setShowSidebar(!showSidebar)
    }

    return (
        <>
            <Header onClick={() => onClickSidebar()}/>
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to={"/menu"}/>}/>
                    <Route path="/menu" element={<Menu showSidebar={showSidebar}
                                                        openSidebar={(prop) => onClickSidebar(prop)}/>}/>
                </Routes>
            </main>
            }
        </>
    );
}