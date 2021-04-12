import React from "react";
import "./style.css"
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer className={"mainFooterContainer"}>
            <nav className={"mainNavContainer"}>
                <div className={"img-container"}>
                    <img className={"logo-img"}
                         src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                         alt="The Movie Database (TMDb)"
                         width="154"
                         height="20"
                    />
                </div>
                <div className={"styleDivChild"}></div>
                <div className={"styleDivChild"}>
                    <h3>THE BASICS</h3>
                    <ul>
                        <li>About TMDb</li>
                        <li>Contact Us</li>
                        <li>Support Forums</li>
                        <li>API</li>
                        <li>System Status</li>
                    </ul>
                </div>
                <div className={"styleDivChild"}>
                    <h3>GET INVOLVED </h3>
                    <ul>
                        <li> Contribution Bible</li>
                        <li> 3rd Party Applications</li>
                        <li> Add New Movie</li>
                        <li>Add New TV Show</li>
                    </ul>
                </div>
                <div className={"styleDivChild"}>
                    <h3>COMMUNITY </h3>
                    <ul>
                        <li> Guidelines</li>
                        <li>Discussions</li>
                        <li> Leaderboard</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div>
                    <h3>LEGAL </h3>
                    <ul>
                        <li> Terms of Use</li>
                        <li> API Terms of Use</li>
                        <li> Privacy Policy</li>
                    </ul>
                </div>

            </nav>
        </footer>
    )
}

export default Footer