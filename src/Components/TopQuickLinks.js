import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import RedeemIcon from '@mui/icons-material/Redeem';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const quickLinks = [
    { name: 'Free Rewards', icon: <RedeemIcon style={{ fontSize: '48px', color: '#9c27b0' }} /> },
    { name: 'Reload Giftcards', icon: <CardGiftcardIcon style={{ fontSize: '48px', color: '#9c27b0' }} /> },
    { name: 'Hot Deals', icon: <LocalOfferIcon style={{ fontSize: '48px', color: '#9c27b0' }} /> },
    { name: 'Recommended', icon: <ThumbUpAltIcon style={{ fontSize: '48px', color: '#9c27b0' }} /> },
    { name: 'Free Rewards', icon: <RedeemIcon style={{ fontSize: '48px', color: '#9c27b0' }} /> },
    { name: 'Reload Giftcards', icon: <CardGiftcardIcon style={{ fontSize: '48px', color: '#9c27b0' }} /> },
];

const TopQuickLinks = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: '20px',margin:"20px 0px", borderRadius: '30px' ,border:"2px solid #9c27b0"}}>
            <Grid container spacing={3} justifyContent="center">
                {quickLinks.map((link, index) => (
                    <Grid item xs={6} sm={2} key={index} style={{ textAlign: 'center' }}>
                        {link.icon}
                        <Typography variant="subtitle1" >
                            {link.name}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TopQuickLinks;
