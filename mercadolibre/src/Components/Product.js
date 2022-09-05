import React from "react";
import { SellerInfo } from './SellerInfo';
import {Container2, Panel, Bear, Column, Description, Section} from '../styles/GlobalStyles'

function Product(){
    return(
        <Container2>
            <Panel>
                <Column>
                <Bear>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_902530-MLA40254269277_122019-O.webp" alt="osito"/>
                </Bear>
                <Info/>
               
                </Column>
               
                <Column>
                {/* <Sale/>
                 */} 
                <SellerInfo/>
              <Guaranty/>
                </Column>

            </Panel>
          
        </Container2>
    )
}

const Info =() =>{
    return(
        <Description>
            <h4>Descripción</h4>
            <p>Hermosisimo peluche para regalar enamorados. De 45 cm.<br/>
               Entrega en nuestro local de once o te enviamos a todo el país.
            </p>
        </Description>
    )
}
const Guaranty =() =>{
    return(
        <Section>
            <p style={{fontSize:'18px', opacity:'90%', paddingTop:'16px'}}>Devolución Grátis</p>
            <p className="description">Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!</p>
            <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link"> Conocer más sobre devoluciones</a>
            <p className="title-guaranty">Garantía</p>
            <div className="info-guaranty">
                
                    <p className="title">Compra Protegida con Mercado Pago</p>
                    <p className="description">Recibí el producto que esperabas o te devolvemos tu dinero</p>
              
            
                    <p className="title">Garantía del vendedor</p>
                    <p className="description">Garantía del vendedor: 1 meses</p> 
               
            </div>
             <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" className="link"> Conocer más sobre garantía</a>
        </Section>
    )
}

export default Product