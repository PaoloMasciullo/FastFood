import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Menu from "./Menu";

export default function Main() {
    return (
        <>
            <Header/>
            {/*<Sidebar/>*/}
            <main>
                <Menu />
            </main>
        </>

    );
}