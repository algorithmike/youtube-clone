import React from 'react';

import '../styles/RecommendedVideos.css';
import VideoCard from './VideoCard';

const RecommendedVideos = () => {
    let dummyContent = []
    for(let x = 1; x <= 24; x++){
        dummyContent.push (
            <VideoCard 
                image = "https://dummyimage.com/600x400/000/fff"
                channel = "Placeholder Channel"
                channelImage = "https://dummyimage.com/200x200/ff47ff/ffffff&text=Avatar"
                title = {`Video Title #${x}`}
                views = "123,456,789"
                timestamp = "Time ago"
            />
        )
    }

    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                {dummyContent}
            </div>
        </div>
    )
}

export default RecommendedVideos
