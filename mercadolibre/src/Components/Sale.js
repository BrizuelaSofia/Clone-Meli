import React from 'react';
import Button from '@mui/material/Button';
import {Container4, State, Row3, HeartIcon, Price, Card2, Stock, ButtonCard, Benefits, TrophyIcon, CheckIcon} from '../styles/GlobalStyles'
export const Sale= () =>{
  return(
    <Container4 >
        <State>Nuevo  |  118 vendidos</State>
        <Row3>
            <h1>Peluche Oso Amor Corazón Enamorado Novio Novia Amigo Amiga</h1>
       
        <HeartIcon/>  </Row3>
        {/* <img src="" alt="stars"/> */}
        <Price>
          
           <span>$5.490</span> 
            <p className="black">en <span className="green">6x $915 sin interés</span></p>
            <p className="doble">Duplica puntos:<span className="point">sumás 78 Mercado Puntos</span> </p>
           
            <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link">Ver los medios de pago</a>
        </Price>
        <Card2>
            <div>
          
           <span className="title">Llega <b>mañana</b> </span>
           <span className="text">Solo en CABA y zonas de GBA comprando dentro de las próximas <b>1 h 29 min</b><br/>
           Beneficio Mercado Puntos</span> 
           <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link">Ver más formas de entrega</a>

           </div> 
           <div className="top">
        
           <span className="title">Devolución gratis</span>
           <span className="text">Tenes 30 días desde que lo recibís</span> 
           <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link">Conocer más</a>
           </div> 
            </Card2>

           <Stock>
            <h5>Stock disponible</h5>
            <p>Cantidad <strong>1 unidad</strong>  </p>
          
          <input type="number" value=""/>
          <span>(10 disponibles)</span>
           </Stock>
           <ButtonCard>
            <Button className='solid'><p>Comprar ahora</p></Button>
            <Button className="light"><p>Agregar al carrito</p></Button>
           </ButtonCard>
          <Benefits>
            <li>
            <CheckIcon/> 
          <p>Compra Protegida, <span>recibí el producto que esperabas o te devolvemos tu dinero</span></p>
            </li>
            <li>
            <TrophyIcon/>
           <p>Mercado Puntos. <span>Sumás 78 puntos</span></p>
            </li>
            </Benefits> 
       
    </Container4>
        
    
  )
}