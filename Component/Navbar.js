import {
    AppBar,
    Toolbar,
    IconButton,
    Avatar,
    Box,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText 
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

const Navbar = () => {
    // checking media query for tablet
    const useMediaQuery = (width) => {
        const [tablet, setTablet] = useState(false);
      
        const updateTarget = useCallback((e) => {
          if (e.matches) {
            setTablet(true);
          } else {
            setTablet(false);
          }
        }, []);
      
        useEffect(() => {
          const media = window.matchMedia(`(max-width: 600px)`);
          media.addListener(updateTarget);
      
          // Check on mount (callback is not called until a change occurs)
          if (media.matches) {
            setTablet(true);
          }
      
          return () => media.removeListener(updateTarget);
        }, []);
      
        return tablet;
      };
      const breakPoint = useMediaQuery(600);

    // state for mobile navbar
    const [open,setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
                
                > 
                <Avatar>L</Avatar>
                    {breakPoint ? (
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        open={open}
                        onClick={() => handleClick()}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box
                        sx={{
                            display: 'flex',
                            gap : '10px'
                        }}
                        >   
                            <Link href='/'><a><Typography color="white">Home</Typography></a></Link>
                            <Link href='/about'><a><Typography color="white">About</Typography></a></Link>
                            <Link href='/contact'><a><Typography color="white">Contact me</Typography></a></Link>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            { open && (
                <Drawer
                open={open}
                anchor="right"
                onClose={() => handleClick()}
                elevation={0}
                >
                    <List>
                        <ListItem>
                            <ListItemText><Link href='/'><a>Home</a></Link></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Link href='/about'><a>About</a></Link></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText><Link href='/contact'><a>Contact me</a></Link></ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            )}
        </>
    );
}
 
export default Navbar;