import { Avatar } from '@material-ui/core';
import React from 'react';

import '../styles/VideoCard.css';

const VideoCard = ({image, channel, channelImage, title, views, timestamp}) => {
    return (
        <div className="videoCard">
            <img src={image} alt="" className="videoCard__thumbnail"/>
            <div className="videoCard__info" >
                <Avatar 
                    className="videoCard__avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} &bull; {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
