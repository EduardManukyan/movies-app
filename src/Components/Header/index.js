import React from "react";
import {icons} from "./Icons";
import "./style.css"
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className={"header-container"}>
            <div className={"navbar-container"}>
                <div className={"navbar"}>
                    <div className={"container-nav-first-part"}>
                        <NavLink exact to='/'>
                        <img className={"logo-img"}
                             src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                             alt="The Movie Database (TMDb)"
                             width="154"
                             height="20"
                        />
                        </NavLink>
                        <ul className={"navbar-first-part"}>
                            <li className={'navbar-item'}>Movies</li>
                            <li className={'navbar-item'}>TV Shows</li>
                            <li className={'navbar-item'}>People</li>
                            <li className={'navbar-item'}>More</li>
                        </ul>

                    </div>
                    <div className={"container-nav-second-part"}>
                        <ul className={"navbar-second-part"}>
                            <li className={'navbar-item'}>Add</li>
                            <li className={'navbar-item'}> language</li>
                            <li className={'navbar-item'}>Login</li>
                            <li className={'navbar-item'}>JoinTMDB</li>
                            <li className={'navbar-item'} style={{padding: 0}}>{icons[0].search}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
