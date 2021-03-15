import React from 'react';
import { Avatar } from '@material-ui/core';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import '../styles/ChannelRow.css';

const ChannelRow = (
{image, channel, verified, subs, numOfVideos, description}
) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo"
                alt={channel} src={image}
            />
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon/>}</h4>
                <p>{subs} subscribers &bull; {numOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;