import React, {useState} from "react";
import Header from "../components/layout/Header";
import Menu from "./Menu";
import Aside from "./Aside";

export default function Main() {
    const [showSidebar, setShowSidebar] = useState(false);

    function onClickSidebar(){
        setShowSidebar(!showSidebar);
    }

    return (
        <>
            <Header onClick={() => onClickSidebar()}/>
            <main>
                <Menu showSidebar={showSidebar} openSidebar={() => onClickSidebar()}/>
            </main>
        </>

    );
}