import React from "react"
import MainRouting from "./Components/Routing/MainRouting";
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <MainRouting/>
        </BrowserRouter>
    );
}

export default App;
