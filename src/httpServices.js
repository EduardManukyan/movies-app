import {Link} from "react-router-dom";
import React from "react";

const baseUrl = 'https://api.themoviedb.org/3/';
export const baseImgUrl='https://image.tmdb.org/t/p/w500';

export function baseGetRequest (url) {
    return fetch(baseUrl + url)
        .then(res => res.json())
}