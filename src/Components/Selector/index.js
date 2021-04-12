import React, {useState} from "react"
import PopularOnTv from "./PopularOnTv"
import PopularTheatre from "./PopularTheatre"

import "./style.css"

export default function CardContainer() {
    const [onTv, useOnTv] = useState(true);
    const [inTheatres, useInTheatres] = useState(false);

    const ChangeStatusTrue = () => {
        useOnTv(false);
        useInTheatres(true);
    };

    const ChangeStatusFalse = () => {
        useOnTv(true);
        useInTheatres(false);
    };
    return (
        <section style={{
            display: "-webkit-inline-box",
            margin: "0 7vw"
        }}>
            <div className={"movieSelector"}>
                <div className={'container-first-part'}>
                    <div>
                        <div style={{width: '100%'}}>
                            <div className={"selectorPopular-first-part"}>
                                <h2>What's Popular</h2>
                                <div>
                                    <div className={"selectorPopular-second-part"}>
                                        <div
                                            className={"selectorItem"}
                                            onClick={ChangeStatusFalse}
                                            style={
                                                onTv
                                                    ? {backgroundColor: "rgb(3, 37, 65)", width: "4.5vw"}
                                                    : {color: "black", padding: "0 0.2vw"}
                                            }
                                        >
                                            On TV
                                        </div>
                                        <div
                                            className={"selectorItem"}
                                            onClick={ChangeStatusTrue}
                                            style={
                                                inTheatres
                                                    ? {backgroundColor: "rgb(3, 37, 65)", width: "7vw"}
                                                    : {color: "black", padding: "0 0.2vw"}
                                            }
                                        >
                                            In Theatres
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        {onTv ? <PopularOnTv /> : <PopularTheatre />}
                    </div>
                </div>
            </div>


        </section>

    )
}

