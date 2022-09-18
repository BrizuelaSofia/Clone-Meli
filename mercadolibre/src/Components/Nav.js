import React from "react";
import {Container1, Row} from '../styles/GlobalStyles'
function Hero(){
    return ( 
        <div> 
    <p style={{fontSize:'14px', lineHeight:'18.9px', textAlign:'left', marginBottom:'6px', marginTop:'18px', color:'#000'}}>También puede interesarte:<span style={{ color:'#000000',
    opacity:'70%', padding:'5px'}}>squishmallows</span></p> 
     <Container1>

     <Row>
        <a  className="black" href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" >Volver al listado <span style={{color:'rgba(0,0,0,.2)'}}>|</span></a>
        <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer">Juegos y juguetes <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg> Peluches</a>
        
    </Row>
    <Row>
    <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" >Compartir <span style={{color:'rgba(0,0,0,.2)'}}>|</span></a>
        <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer">Vender uno igual</a>

    </Row>

      
     </Container1>
     </div> 

    )
}
export default Hero;
