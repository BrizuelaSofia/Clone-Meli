import React from 'react';
import Button from '@mui/material/Button';
import {Container4, State, Row3,Bear,  HeartIcon, Price, Card2, Stock, ButtonCard, Benefits, TrophyIcon, CheckIcon, ArrowIcon, TruckIcon, StarIcon} from '../styles/GlobalStyles'
export const Sale= () =>{
  return(
    <Container4 >
        <State>Nuevo  |  118 vendidos</State>
        <Row3>
          <Bear>
            <h1>Peluche Oso Amor Corazón Enamorado Novio Novia Amigo Amiga</h1>
       </Bear>
        <HeartIcon/>  </Row3>
        {/* <img src="" alt="stars"/> */}
        <div style={{display:'flex', height:'25px'}}>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
         <p style={{position:'relative', bottom:'20px', left:'4px', color:'3483fa', fontSize:'14px'}}>(8)</p>
</div>
        
        <Price>
          
           <span>$5.490</span> 
            <p className="black">en <span className="green">6x $915 sin interés</span></p>
            <p className="doble">Duplica puntos:<span className="point">sumás 78 Mercado Puntos</span> </p>
           
            <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link">Ver los medios de pago</a>
        </Price>
        <Card2>
            <div>
              <div className="icon-title">
            <TruckIcon/>
           <span className="title">Llega <b>mañana</b> </span>
           </div>
           <span className="text">Solo en CABA y zonas de GBA comprando dentro de las próximas <b>1 h 29 min</b><br/>
           Beneficio Mercado Puntos</span> 
           <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link">Ver más formas de entrega</a>

           </div> 
           <div className="top">
            <div>
           <ArrowIcon/>
           <span className="title left">Devolución gratis</span>
           </div>
           <span className="text">Tenes 30 días desde que lo recibís</span> 
           <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link">Conocer más</a>
           </div> 
            </Card2>

           <Stock>
            <h5>Stock disponible</h5>
            <p>Cantidad: <strong>1 unidad</strong> <span>(10 disponibles)</span>  </p>
          
          
         
           </Stock>
           <ButtonCard>
            <Button className='solid'><p>Comprar ahora</p></Button>
            <Button className="light"><p>Agregar al carrito</p></Button>
           </ButtonCard>
          <Benefits>
            <div className="row">
            <CheckIcon/> 
          <p>Compra Protegida, <span>recibí el producto que esperabas o te devolvemos tu dinero</span></p>
            </div>
            <div className="row">
            <TrophyIcon/>
           <p className="bottom">Mercado Puntos. <span>Sumás 78 puntos</span></p>
            </div>
            </Benefits> 
       
    </Container4>
        
    
  )
}