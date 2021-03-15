import '../styles/SearchPage.css';
import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://media-exp1.licdn.com/dms/image/C4D03AQEIBrAAXnklmg/profile-displayphoto-shrink_800_800/0/1517611169022?e=1620259200&v=beta&t=B5DsTWLN8OTbYOYpPJ0xGzPqHTnkZSctQCjZuneIn5w"
                channel="Michael Fernandez"
                verified
                subs="7.9M"
                numOfVideos={24}
                description="Welcome to my front-end YouTube clone built with React. This is not a real channel. This is not a real YouTube page."
            />
            <hr/>

            <VideoRow
                views="37.4M"
                subs="7.1M"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu feugiat augue. Cras elit sem, volutpat vitae interdum id, feugiat quis justo. Morbi vel nibh sollicitudin, cursus arcu vel, bibendum augue. Phasellus luctus est in tincidunt tempus. Pellentesque pretium ornare ex scelerisque efficitur."
                timestamp="4 days ago"
                channel="Michael Fernandez"
                title="Lorem Ipsum"
                image="https://dummyimage.com/600x400/000/fff"
            />
        </div>
    )
}

export default SearchPage;