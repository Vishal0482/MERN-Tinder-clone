import React from 'react';
import '../assets/CSS/SwipeButton.css'
import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function SwipeButton() {
    return (
        <div className="swipeButton">
            <IconButton className="swipeButton__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButton__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButton__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButton__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButton__lighting">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButton;
