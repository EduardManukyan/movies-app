import React from "react";
import "./style.css"
import SearchBoxImage from "../Img/searchBox.jpg";

export default function Search(props) {
    return (
        <section style={{
            backgroundImage: "url(" + SearchBoxImage + ")",
        }} className={"search-container"}>
            <div className={"container-first-part"}>
                <div className={"container-second-part"}>
                    <div className={"content"}>
                        <div className={"title-content"}>
                            <h2>Welcome.</h2>
                            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>
                        <div className={"form-container"}>
                            <form className={"form-content"}>
                                <label>
                                    <input className={"input-content"}
                                           placeholder={"Search for a movie, tv show, person......"}/>

                                </label>
                                <button   className={"button-style"} >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
