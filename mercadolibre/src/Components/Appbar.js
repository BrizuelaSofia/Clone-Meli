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
import logo from '../assets/logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {BsCart2} from "react-icons/bs";
import '../styles/style.css'
import { maxWidth } from '@mui/system';
import { GoLocation } from "react-icons/go";
import "../App.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




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
      {/* <Accordion>
       
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header"
       >
         <Typography>Accordion 1</Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
           malesuada lacus ex, sit amet blandit leo lobortis eget.
         </Typography>
       </AccordionDetails>
     </Accordion> */}
      {/* <MenuItem>
        <Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <Typography>Accordion 1</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
      </MenuItem> */}
        <div style={{color:'rgba(51,51,51,.6)', fontSize:'14px', lineHeight:'22px', paddingLeft:'11px', position:'relative', top:'2px'}}>
          <p style={{paddingRight:'12px'}} >Categorías</p>
          <p>Ofertas</p>
          <p>Historial</p>
          <p>Supermercado</p>
          <p>Moda</p>
          <p>Vender</p>
          <p>Ayuda</p></div>
        
        
      <div style={{display:'flex', flexDirection:'column',marginBottom:'8px', width:'100%' }}>
        <img className="disney-responsive" src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp' alt='offer' style={{maxwidth:'340px', maxHeight:'39px', paddingRight:'26px' }}/>
        
              <div style={{color:'#333', paddingBottom:'5px', paddingLeft:'20px', paddingTop:'23px', width:'100%', fontSize:"14px" }}>
   
       <p style={{paddingLeft:'20px', fontSize:'13px'}}>Creá tu cuenta</p>
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
     <p style={{paddingLeft:'20px', fontSize:'13px'}}>Ingresá</p> 
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
            <p style={{paddingLeft:'20px',paddingRight:'20px', fontSize:'13px'}}>Mis Compras</p> 
     
     
    <BsCart2 style={{fontSize:'20px',  paddingRight:'10px'}}></BsCart2> 
      </div>
  
</div>
    </Menu>
  
  );  

  return (
    
    <Box style={{ flexGrow: 1, backgroundColor:'red'}}>
      
      <AppBar position="static" style={{boxShadow:'0 1px 0 0 rgb(0 0 0 / 10%)'}}>
        <Toolbar style={{backgroundColor:'#fff159', height:'5.5rem', paddingTop:'12.5px', paddingLeft:'148px', paddingRight:'160px'}} className="responsive-nav">
       
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
           
          </Typography> */}
        <div style={{display:'flex', flexDirection:'column', textAlign:'start' ,marginBottom:'10px'}}>
            <img src={logo} alt='meli' style={{ width:'11.2rem', marginTop:'2.4rem'}}/>
           <div style={{textAlign: 'start', marginBottom:'30px',color:'rgba(0,0,0,.5)'}}>            
           <GoLocation style={{position:'relative', left:'17px', bottom:'10px', fontSize:'23px', color:''}}/>
            <Typography style={{ fontSize:'10.5px', position:'relative', bottom:'35px', left:'42px', lineHeight:'13px', backgroundColor:'#fff159', letterSpacing:'.5px'}}> 

                Enviar a <br/>
                <span style={{fontSize:'13px', color:'#333', opacity:'90%', position:'relative', right:'17px'}}>Capital Federal</span>
            </Typography>
           
            </div>
        </div>  
          
         <div style={{flexGrow:1, position:'relative', }}>
          <Search style={{backgroundColor:'white',boxShadow:'0 1px 2px 0 rgb(0 0 0 / 20%)', display:'flex', flexDirection:'row-reverse',left:'3px', bottom:'18px', borderRadius:'1px', justifyContent:'space-between', width:'100%', fontFamily:'inherit' }}>
        
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#333', fontSize:'23px', position:'relative', left:'5px', bottom:'2px'}}/>
            </SearchIconWrapper>    
            <div style={{color:'#333', fontSize:'16px', width:'100%', fontFamily:'inherit !important' }}>
            <StyledInputBase  
              placeholder="Buscar productos, marcas y más…"
             
            />
            </div>
          </Search>
     
          </div>
          <Box sx={{ flexGrow: 1 }}   />
          <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <div>
              <div  className="burguer-menu"style={{color:'rgba(51,51,51,.6)', fontSize:'14px', lineHeight:'22px', paddingLeft:'20px', position:'relative', top:'2px'
            }}>
          
          <p style={{paddingRight:'12px'}} >Categorías</p>
          <p>Ofertas</p>
          <p>Historial</p>
          <p>Supermercado</p>
          <p>Moda</p>
          <p>Vender</p>
          <p>Ayuda</p></div>
        
           
             <div style={{display:'flex', flexDirection:'column', marginBottom:'8px', width:'100%'}}>
       
       
        <img className="disney-responsive" src='https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp' alt='offer' style={{maxwidth:'340px', maxHeight:'39px',paddingRight:'26px'}}/>
        
                <div className="burguer" style={{color:'#333', paddingBottom:'5px',paddingTop:'23px',  fontSize:"14px"}}>
    
       <p  style={{paddingLeft:'20px', fontSize:'13px'}}>Creá tu cuenta</p>
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
      <p style={{paddingLeft:'20px', fontSize:'13px'}}>Ingresá</p> 
      
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
            <p style={{paddingLeft:'20px',paddingRight:'20px', fontSize:'13px'}}>Mis Compras</p> 
     
     
  
      </div>
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

