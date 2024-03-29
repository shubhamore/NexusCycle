import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function Sidebar({ children }) {
    const { logout } = useContext(UserContext);

    return (
        <>
            <Box sx={{ display: 'flex',minHeight:'100vh' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Welcome Scrum Master
                        </Typography>
                        <Link to='/' onClick={logout} className='ml-auto hover:text-white'>Logout</Link>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: '#fafafa'},
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))} */}
                            <ListItemButton>
                                <Link to='/' className='w-full'>
                                    <ListItemText primary='Dashboard' />
                                </Link>
                            </ListItemButton>
                            <ListItemButton>
                                <Link to='/video-call' className='w-full'>
                                    <ListItemText primary='Video Call' />
                                </Link>
                            </ListItemButton>
                        </List>

                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <div className='mt-14'></div>
                    {/* <div style={{ minHeight: '100vh' }}> */}

                        {children}
                    {/* </div> */}
                </Box>
            </Box>
        </>
    )
}
