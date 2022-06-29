import React, {useState} from "react";
import Header from "../components/layout/Header.js";
import Menu from "./Menu.js";
import {Navigate, Routes} from "react-router";
import {Route} from "react-router-dom";
import Page404 from "./pages/Page404";

export default function Main({logout}) {
    const [showSidebar, setShowSidebar] = useState(false);

    function onClickSidebar(prop) {
        prop ?
            setShowSidebar(true)
            :
            setShowSidebar(!showSidebar)
    }

    return (
        <>
            <Header onClick={() => onClickSidebar()} logout={logout}/>
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to={"/menu"}/>}/>
                    <Route path="/menu" element={<Menu showSidebar={showSidebar} setShowSidebar={setShowSidebar}
                                                        openSidebar={(prop) => onClickSidebar(prop)}/>}/>
                    <Route path="*" element={<Page404/>} />
                </Routes>
            </main>
            }
        </>
    );
}