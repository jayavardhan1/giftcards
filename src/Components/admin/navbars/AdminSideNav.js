import React, { useState } from 'react';
import { ListItemIcon, ListItemText, Toolbar, ListItemButton, Drawer, List, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { linksData } from '../../../Data/linksData';

export const drawerWidth = 100; // Increased width

export const theme = createTheme({
    typography: {
        fontFamily: '"Open sans", "Regular"',
        fontSize: 14,
        margin: 0,
        padding: 0,
        lineSpacing: 36,
    },
    palette: {
        text: {
            primary: '#3A3A3A',
        },
    },
});

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
}));

export const StyledList = styled(List)(({ theme }) => ({
    overflowY: 'auto',
}));

const AdminSideNav = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);
    const [hoveredLink, setHoveredLink] = useState(null);

    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const renderSubLinks = (subLinks) => (
        subLinks.length > 0 && (
            <Box
                sx={{
                    position: 'fixed',
                    left: drawerWidth,
                    backgroundColor: '#17153B',
                    zIndex: 1000,
                    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                    padding: '10px',
                    borderRadius: '10px',
                    width: '170px',
                    marginTop: '-80px',
                }}
            >
                {subLinks.map((subLink, subIndex) => (
                    <ListItemButton
                        key={subIndex}
                        component={Link}
                        to={subLink.to}
                        style={{
                            backgroundColor: activeLink === subLink.to ? 'pink' : 'inherit',
                            margin: '0px 0px',
                            borderRadius: '10px',
                            width: "150px",
                            color: 'black',
                        }}
                    >
                        <ListItemText primary={subLink.text} />
                    </ListItemButton>
                ))}
            </Box>
        )
    );

    return (
        <ThemeProvider theme={theme}>
            <StyledDrawer variant="permanent" anchor="left">
                <Toolbar />
                <StyledList>
                    {linksData.map((link, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredLink(link.text)}
                            onMouseLeave={() => setHoveredLink(null)}
                            onClick={() => setActiveLink(link.to)}
                            style={{
                                position: 'relative',
                                border: hoveredLink === link.text ? 'pink' : 'none'
                            }}
                        >
                            <ListItemButton
                                component={Link}
                                to={link.to}
                                style={{
                                    backgroundColor: activeLink === link.to ? '#987D9A' : 'inherit',
                                    margin: '0px 10px',
                                    borderRadius: '10px',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    color: '#3A3A3A',
                                }}
                            >
                                <ListItemIcon style={{ justifyContent: 'center' }}>
                                    {React.cloneElement(link.icon, { style: { fontSize: '2rem' } })}
                                </ListItemIcon>
                                <ListItemText primary={link.text} />
                            </ListItemButton>
                            {hoveredLink === link.text && link.subLinks && renderSubLinks(link.subLinks)}
                        </div>
                    ))}
                </StyledList>
            </StyledDrawer>
        </ThemeProvider>
    );
};

export default AdminSideNav;
