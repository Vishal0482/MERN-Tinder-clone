import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import '../assets/CSS/Header.css';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" />
            </IconButton>
            
            <img className='header__logo' src="https://www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo-253x300.png" alt="logo" />
            
            <IconButton>
                <ForumIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header;
