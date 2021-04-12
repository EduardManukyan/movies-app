import React from "react";
import HomePage from "../Homepage";
import FilmPage from "../FilmPage";
import Header from "../Header";
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";

function MainRouting() {
    return (
        <BrowserRouter>
            <Header/>

            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/movie">
                    Movie
                </Route>
                <Route path="/tv">
                    TV Shows
                </Route>
                <Route path="/people">
                    People
                </Route>
                <Route path="/login">
                    Login page
                </Route>
                {/*<Route path="/register">*/}
                {/*    <Register />*/}
                {/*</Route>*/}
                <Route path="/film-page/:id">
                    <FilmPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouting