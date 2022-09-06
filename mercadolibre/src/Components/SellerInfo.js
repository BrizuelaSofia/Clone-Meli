import React from 'react';
import { Container3, Card, LocationIcon, GoldIcon, Items, Box, Row2, SupportIcon, TimeIcon, Link } from "../styles/GlobalStyles"

export const SellerInfo = () => {
    return(
        <div style={{width:'378px'}}>
            <Container3>
            <p className="seller-title">Información sobre el vendedor</p>
           <Card>
            <div style={{display:'flex'}}>
            <LocationIcon/>
            <div className="left">
                <p>Ubicación</p>
                <p className="strong">Balvanera, Capital Federal</p>
            </div>
          </div>
           <div style={{display:'flex'}}>
            <GoldIcon/>
            <div className="top">
                <p className="green">MercadoLíder Gold</p>
                <p className="strong">¡Es uno de los mejores del sitio!</p>
            </div>
            </div>
           </Card> 
           <Items>
            <Box> 
                <li/>
                <li/>
                <li/>
                <li/>
                <li className="active"/>
            </Box>
           </Items>
           <Row2 style={{ display:'flex'}}>
            <div className="bottom div">
            <strong className="number">257</strong>
           <span style={{width:'5rem', paddingLeft:'10px'}}>Ventas en los últimos 60 días</span>
            </div>
            <div className="border">
            {/* <strong><SupportIcon/>HOLA</strong> */}
            <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg" alt="support" height={30} width={30}/>
           <span style={{width:'4.5rem'}}>Brinda buena atención</span>
            </div>
            <div>
            
            <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg" alt="timer" height={30} width={30}/>
           <span style={{width:'4.5rem'}}>Despacha sus productos a tiempo</span>
            </div>
           
           </Row2>
           <Link> <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link">Ver más datos de este vendedor</a></Link>
          
            </Container3>
        </div>
    )
}