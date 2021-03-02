import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';

const Header = () => {
    return (
        <div className="header">
            <MenuIcon />
            <img className="header__logo" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"/>
            <input type="text"></input>
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar alt="avatar" src="https://media-exp1.licdn.com/dms/image/C4D03AQEIBrAAXnklmg/profile-displayphoto-shrink_800_800/0/1517611169022?e=1620259200&v=beta&t=B5DsTWLN8OTbYOYpPJ0xGzPqHTnkZSctQCjZuneIn5w"/>
        </div>
    )
}

export default Header