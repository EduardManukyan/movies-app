import React, {useEffect, useState} from 'react';
import {baseGetRequest, baseImgUrl} from "../../httpServices";
import {useParams} from "react-router-dom";
import {getTimeFromMinutes, convertNumberToCurrencies,createImgUrl} from "./helpers"
import Icon from "./icon"
import "../FilmPage/styles.css"
const FilmPage = () => {
    const {id} = useParams();
    const [filmData, setFilmData] = useState(null);
    console.log(filmData)
    useEffect(() => {
        baseGetRequest(`movie/${id}?api_key=f49a4beeaa9101d38c519461dd3ad83b&language=en-US&append_to_response=credits`)
            .then(res => setFilmData(res))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return filmData && (

        <section className={'filmPageBody'}>
            <div className={'filmPageHeader'}
                 style={{backgroundImage: createImgUrl(filmData.backdrop_path)}}>
                <div className={'filmImg'}>
                    <div className={'filmPageFirst'}>
                        <section className={'filmSection'}>
                            <div className={'filmPoster'}>
                                <div>
                                    <div className={'imgPoster'}>
                                        <img className={'poster'} src={`${baseImgUrl}${filmData.poster_path}`} alt=""/>
                                    </div>
                                </div>


                            </div>
                            <div className={'textContainer'}>
                                <section className={'filmInfo'}>
                                    <div className={'filmTitle'}>
                                        <h2 className={'titleStyle'}>
                                            {filmData.title}
                                            <span
                                                className={'filmData'}>({(filmData.release_date.split("-", [1]))})</span>
                                        </h2>
                                        <div className={'filmGenreStyle'}>
                                            {
                                                filmData.genres.map(i => (
                                                    <span className={'genreStyle'} key={i.id}>{i.name},&nbsp;</span>
                                                ))
                                            }
                                        </div>
                                        <span>{getTimeFromMinutes(filmData.runtime)} </span>
                                    </div>

                                    <div className={'iconContainer'}>
                                        <div>
                                            <div>{filmData.vote_average}</div>
                                            <p>User <br/> Score</p>
                                        </div>
                                        {/*<Icon/>*/}
                                    </div>
                                    <div className={'headerInfo'}>
                                        <h3 className={'tagline'}>{filmData.tagline} </h3>
                                        <h3 className={'styleOverview'}>
                                            Overview
                                        </h3>
                                        <div>
                                            <p>
                                                {filmData.overview}
                                            </p>

                                            <div className={'crewContainerStyle'}>
                                                <div>
                                                    <p className={'directorNameContainer'}>
                                                        <span className={'directorName'}>
                                                            {filmData.credits.crew[0].name}
                                                        </span>
                                                    </p>
                                                    <p className={'directorNameContainer'}>Director, Writer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className={'mainDivContainer'}>
                <div className={'columnWrapper'}>
                    <div className={'contentWrapper'}>
                        <div style={{display: 'block',}}>
                            <div className={'whiteColumn'}>
                                <section className={'sectionContainer'}>
                                    <h3 className={'topBilledCastStyle'}>Top Billed Cast</h3>
                                    <ul className={'peopleScroller'}>
                                        {
                                            filmData.credits.cast.map(i => (
                                                <li key={i.id} className={'cardStyle'}>
                                                    <div className={'imgHrefStyle'} >

                                                        <img className={'profileImgStyle'}
                                                             src={`${baseImgUrl}${i.profile_path}`}
                                                             alt=""/>
                                                    </div>
                                                    <p className={'nameStyle'}>{i.original_name}</p>
                                                    <p style={{paddingLeft: '10px'}}>{i.character}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </section>
                            </div>
                        </div>
                        <div className={'column'}>
                            <div style={{display: 'block',}}>
                                <section className={'splitColumn'}>
                                    <div>
                                        <div>
                                            <section className={'sectionColumn'}>
                                                <strong>Original Title</strong>
                                                <p className={'coluIinfo'}>
                                                    {filmData.original_title !== 0 ? filmData.original_title : "-"}
                                                </p>
                                                <strong>Status</strong>
                                                <p className={'coluIinfo'}>
                                                    {filmData.status !== 0 ? filmData.status : "-"}
                                                </p>
                                                <strong>Original Language</strong>
                                                <div className={'coluIinfo'}>
                                                    {filmData.spoken_languages.map(({name},i) => (
                                                        <p key={i}>{name}</p>
                                                    ))
                                                    }{"-"}
                                                </div>
                                                <strong>Budget</strong>
                                                <p className={'coluIinfo'}>
                                                    {filmData.budget !== 0 ? convertNumberToCurrencies(filmData.budget) : "-"}
                                                </p>
                                                <strong>Revenue</strong>
                                                <p className={'coluIinfo'}>
                                                    {filmData.revenue !== 0 ? convertNumberToCurrencies(filmData.revenue) : "-"}
                                                </p>
                                            </section>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilmPage;