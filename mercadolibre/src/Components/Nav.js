import React from "react";
import {Container1, Row} from '../styles/GlobalStyles'
function Hero(){
    return ( 
        <div> 
    <p style={{fontSize:'14px', lineHeight:'18.9px', textAlign:'left'}}>También puede interesarte:<span style={{ color:'#000000',
    opacity:'90%'}}>squishmallows</span></p> 
     <Container1>

     <Row>
        <a  className="black" href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" >Volver al listado</a>
        <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer">Juegos y juguetes ≻ Peluches</a>
        
    </Row>
    <Row>
    <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" >Compartir</a>
        <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer">Vender uno igual</a>

    </Row>

      
     </Container1>
     </div> 

    )
}
export default Hero;