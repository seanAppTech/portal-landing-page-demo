import * as React from 'react';
import styled from '@emotion/styled'

//Material Components
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// Material Icons
import MenuIcon from '@mui/icons-material/Menu';
import BathtubIcon from '@mui/icons-material/Bathtub';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';


export default function MainAppBar() {
    const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <BathtubIcon />
          <Typography variant="h6" component="div" sx={{ paddingLeft: '10px' }}>
            Splish Splash Retail
          </Typography>
          <Box
            sx={{
                flexGrow: 1,
                marginLeft: '50px'
            }}
          >
            <InvoiceButton 
                variant="outlined" 
                startIcon={<AddIcon />} 
                size="large"
                color="secondary"
                
            >
                Invoice
            </InvoiceButton>
          </Box>

          <Typography variant="h6" component="div">Marko Joanna</Typography>
          <Avatar 
            sx={{
                backgroundColor: 'white',
                color: `${theme.palette.primary.main}`,
                marginRight: '10px',
                marginLeft: '15px',
                width: '20px',
                height: '20px',
                fontSize: '0.6em',
                fontWeight: 700
            }}
          >
            JM
          </Avatar>

          <Div />

          <IconButton
            size="large"
            color="inherit"
            aria-label="help"
          >
            <NotificationsIcon sx={{ paddingRight: 0, marginRight: 0 }} />
        </IconButton>
          <Button color="inherit" sx={{ paddingLeft: 0 }}>Help</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Div = styled.div`
    display: block;
    border-right: 1px solid #fff;
    height: 20px;
    margin-left: 10px;
    margin-right: 5px;
`;

const InvoiceButton = styled(Button)({
    borderRadius: 50,
    width: '200px',
    borderColor: '#fff',
    color: '#fff',
    transition: 'all 0.2s ease',
    '&:hover': {
        borderColor: '#fff',
        color: '#fff',
        opacity: 0.7
    }
});