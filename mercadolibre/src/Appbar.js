import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from './assets/logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './styles/style.css'
import { maxWidth } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <div style={{display:'flex', flexDirection:'column', position:'relative', right:'86px', top:'4px'}}>
        <img src='https://http2.mlstatic.com/D_NQ_756491-MLA48681720059_122021-OO.webp' alt='offer' style={{width:'5rem',  position:'relative', bottom:'18px', left:'28px'}}/>
        
      <div style={{display:'flex',color:'#333',paddingBottom:'5px', paddingLeft:'28px', position:'relative', left:'25px'}}>
     <Typography sx={{px:'1rem'}}>Creá tu cuenta</Typography> 
      {/* <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <Typography sx={{px:'1rem'}}>Ingresá</Typography> 
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
      <Typography sx={{px:'1rem'}}>Mis Compras</Typography> 
      <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
      </div>
</div>
    </Menu>
  );

  return (
    
    <Box style={{ flexGrow: 1, backgroundColor:'red'}}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'#fff159', height:'5.5rem', paddingTop:'12.5px'}}>
        
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
           
          </Typography> */}
        <div style={{display:'flex', flexDirection:'column', textAlign:'start', paddingLeft:'40px', marginBottom:'10px'}}>
            <img src={logo} alt='meli' style={{ width:'11.2rem', marginTop:'3.3rem'}}/>
           <div style={{textAlign: 'start', marginBottom:'30px',color:'rgba(0,0,0,.5)'}}>            
           <LocationOnOutlinedIcon style={{position:'relative', left:'10px', bottom:'10px', fontSize:'30px'}}/>
            <Typography style={{ fontSize:'12px', position:'relative', bottom:'45px', left:'40px'}}> 

                Enviar a <br/>
                Capital Federal
            </Typography>
           
            </div>
        </div>  
          
         <div style={{flexGrow:1, position:'relative'}}>
          <Search style={{backgroundColor:'white', display:'flex', flexDirection:'row-reverse',left:'4px', bottom:'18px', width:'92vh', borderRadius:'1px' }}>
        
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#666', fontSize:'23px', position:'relative', left:'5px', bottom:'2px'}}/>
            </SearchIconWrapper>    
            <div style={{color:'black', fontSize:'16px', position:'relative', right:'318px'}}>
            <StyledInputBase  
              placeholder="Buscar productos, marcas y más…"
              inputProps={{ 'aria-label': 'search'  }}
            />
            </div>
          </Search>
          <div style={{color:'rgba(51,51,51,.6)', fontSize:'14px', lineHeight:'22px', paddingRight:'240px', position:'relative'}}>
          <span>Categorías</span>
          <span>Ofertas</span>
          <span>Historial</span>
          <span>Supermercado</span>
          <span>Moda</span>
          <span>Vender</span>
          <span>Ayuda</span></div>
          </div>
          <Box sx={{ flexGrow: 1 }}   />
          <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
             <div style={{display:'flex', flexDirection:'column', position:'relative', right:'86px', top:'4px' }}>
        <img src='https://http2.mlstatic.com/D_NQ_756491-MLA48681720059_122021-OO.webp' alt='offer' style={{width:'20rem', position:'relative', bottom:'18px', left:'28px'}}/>
        
        <div style={{display:'flex',color:'#333', paddingBottom:'5px', paddingLeft:'28px', position:'relative', left:'25px' }}>
   
        <Typography  sx={{px:'1rem'}}>Creá tu cuenta</Typography> 
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
      <Typography sx={{px:'1rem'}}>Ingresá</Typography> 

            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
      <Typography sx={{px:'1rem'}}>Mis Compras</Typography> 
     
     
      <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon> 
      </div>
      </div>

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
