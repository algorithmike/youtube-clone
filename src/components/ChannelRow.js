import React from 'react';
import { Avatar } from '@material-ui/core';
import '../styles/ChannelRow.css';

const ChannelRow = (
{image, channel, verified, subs, numOfVideos, description}
) => {
    return (
        <div className="channelRow">
            <Avatar alt={channel} src={image}/>
        </div>
    )
}

export default ChannelRow;