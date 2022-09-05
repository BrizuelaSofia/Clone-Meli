import React from 'react';
import { Container3, Card, LocationIcon, GoldIcon, Items, Box, Row2, SupportIcon, TimeIcon, Link } from "../styles/GlobalStyles"

export const SellerInfo = () => {
    return(
        <div>
            <Container3>
            <p className="seller-title">Información del vendedor</p>
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
           <Row2>
            <div>
            <strong>253</strong>
           <span>Ventas en los últimos 60 días</span>
            </div>
            <div>
            <strong><SupportIcon/></strong>
           <span>Brinda buena atención</span>
            </div>
            <div>
            <strong><TimeIcon/></strong>
           <span>Despacha sus productos a tiempo</span>
            </div>
           
           </Row2>
           <Link href="#">Ver más datos de este vendedor</Link>
            </Container3>
        </div>
    )
}