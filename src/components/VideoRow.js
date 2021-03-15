import React from 'react';
import '../styles/VideoRow.css';

const VideoRow = (
    {views, subs, timestamp, channel, description, title, image}
) => {
    return (
        <div className="videoRow">
            <img src={image} />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} &bull;&nbsp;
                    <span className="videoRow__subs">
                        <span className="videoRow__subsNumber">{subs}</span> Subscribers</span> &bull; {views} Views &bull; {timestamp}
                    
                </p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow;