import React from "react";
import "./styles.css";
import {
    Bookmark as BookmarkIcon,
    Favorite,
    List as ListIcon,
    PlayArrow as PlayArrowIcon,
    Star as StarIcon
} from "@material-ui/icons";


const Icon = () => {
    return (
        <div className={'iconContainer'}>
            <div className={'iconStyle'} title="Add to list">
                <ListIcon/>
            </div>
            <div className={'iconStyle'} title="Mark as favorite">
                <Favorite/>
            </div>
            <div className={'iconStyle'} title='Add to your watchlist'>
                <BookmarkIcon/>
            </div>
            <div className={'iconStyle'} title='Rate It!'>
                <StarIcon/>
            </div>
            <div>
                <PlayArrowIcon style={{cursor: "pointer"}}/>
            </div>
            <p className={"stylePlayTrailer"}>Play Trailer</p>
        </div>
    )
}
export default Icon;