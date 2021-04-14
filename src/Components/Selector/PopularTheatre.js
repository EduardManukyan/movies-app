import React, {useEffect, useState} from "react";
import "./PopularOnTvEndHteatreStyle.css"
import {Link,Router} from "react-router-dom";
import {baseImgUrl} from "../../httpServices";


export default function PopularOnTv(props) {
    const [theatrePop, useTheatrePop] = useState("");


    function fetchHandler() {
        fetch(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=f49a4beeaa9101d38c519461dd3ad83b&language=en-US&page=1"
        )
            .then((res) => res.json())
            .then((data) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useTheatrePop(data);
            });
    }


    useEffect(fetchHandler, []);

    return (
        <>
            <div className={"movieContainer"}
                 style={
                     theatrePop
                         ? {overflowX: "scroll", height: "100%"}
                         : {height: "350px"}
                 }
            >
                {
                    theatrePop.results?.map(el => (
                        <Link key={el.id} to={`/film-page/${el.id}`}>
                            <div className={"movieCard"}>
                                <img
                                    className={"moviePoster"}
                                    alt="photo_of_movie"
                                    src={`${baseImgUrl}${el.poster_path}`}
                                />
                                <div className={"movieName"}>{el.title}</div>
                                <p className={"realisedDate"}>{el.release_date}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}
