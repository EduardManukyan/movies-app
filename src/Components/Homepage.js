import React from "react";
import Header from "./Header/index"
import CardContainer from "./Selector/index"
import Search from "./Search/Search";
import Footer from "./Footer";

function HomePage() {
    return (
        <>
            <Header/>
            <Search/>
            <CardContainer/>
            <Footer/>
        </>
    )
}

export default HomePage