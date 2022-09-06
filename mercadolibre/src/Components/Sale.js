import React from 'react';
import {Container4, State, Row3, HeartIcon, Price, Card2, Stock, ButtonCard, Button, Beneficio, TrofeoIcon, CheckIcon} from '../styles/GlobalStyles'
export const Sale= () =>{
  return(
    <Container4>
        <State>Nuevo  |  118 vendidos</State>
        <Row3>
            <h1>Peluche Oso Amor Corazón Enamorado Novio Novia Amigo Amiga</h1>
        </Row3>
        <HeartIcon/> 
        {/* <img src="" alt="stars"/> */}
        <Price>
            $5.490
            <p>en <span>6x $915 sin interés</span></p>
            <p>Duplica puntos:<span>sumás 78 Mercado Puntos</span> </p>
            <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link">Ver los medios de pago</a>
        </Price>
        <Card2>
            <div>
           <img src="" alt="bus"/>
           <span className="title">Llega mañana </span>
           <span className="text"> comprando dentro de las próximas <b>7 h 45 min</b> 
           Beneficio Mercado Puntos</span> 
           <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link">Ver más formas de entrega</a>

           </div> 
           <div>
           <img src="" alt="bus"/>
           <span className="title">Devolución gratis</span>
           <span className="text">Tenes 30 días desde que lo recibís</span> 
           <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link">Conocer más</a>
           </div> 
            </Card2>

           <Stock>
            <h5>Stock disponible</h5>
            <p>Cantidad</p>
          <strong>1 unidad</strong>  
          <input type="number" value=""/>
          <span>(10 disponibles)</span>
           </Stock>
           <ButtonCard>
            <Button>Comprar ahora</Button>
            <Button>Agregar al carrito</Button>
           </ButtonCard>
          <Beneficio>
            <div>
           <CheckIcon/>
          <p>Compra Protegida, <span>recibí el producto que esperabas o te devolvemos tu dinero</span></p>
            </div>
            <div>
           <TrofeoIcon/>
           <p>Mercado Puntos. <span>Sumás 78 puntos</span></p>
            </div>
            </Beneficio> 
       
    </Container4>
        
    
  )
}