import React from "react";
import { SellerInfo } from './SellerInfo';
import {Container2, Panel, Bear, Column, Description, Section} from '../styles/GlobalStyles'
import { Sale } from './Sale';
import Zoom from './Zoom';
import Carousel from "./slider";
function Product(){
    return(
        <Container2>
            <Panel>
             
                <div>
                 <Bear>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px', position:'relative',  right:'135px', bottom:'6px'}}>
                    <img style={{backgroundColor:"white", border:"1.6px solid #3483fa",borderRadius:'4px', padding:'1.5px'}} src="https://http2.mlstatic.com/D_NQ_NP_2X_902530-MLA40254269277_122019-F.webp" alt="oso marrón" height={44} width={44}/>
                    <img style={{backgroundColor:"white", border:"1.8px solid #ddd",borderRadius:'4px', padding:'1px 6px'}} src="https://http2.mlstatic.com/D_NQ_NP_2X_744001-MLA47006128804_082021-F.webp" alt="osito" height={45} width={34}/>
                    <img style={{backgroundColor:"white", border:"1.8px solid #ddd",borderRadius:'4px', padding:'1px 6px'}} src="https://http2.mlstatic.com/D_NQ_NP_2X_717313-MLA42271791164_062020-F.webp" alt="oso osito" height={45} width={34}/>
                    <img style={{backgroundColor:"white", border:"1.8px solid #ddd",borderRadius:'4px', padding:'1px 6px'}} src="https://http2.mlstatic.com/D_NQ_NP_2X_970990-MLA47006177534_082021-F.webp" alt="oso azul" height={45} width={34}/>
                    <img style={{backgroundColor:"white", border:"1.8px solid #ddd",borderRadius:'4px', padding:'1px 6px'}} src="https://http2.mlstatic.com/D_NQ_NP_2X_608508-MLA42271780402_062020-F.webp" alt="oso te amo" height={45} width={34}/>
                    <img style={{backgroundColor:"white", border:"1.8px solid #ddd",borderRadius:'4px', padding:'1px 6px'}} src="https://http2.mlstatic.com/D_NQ_NP_2X_672104-MLA47006142748_082021-F.webp" alt="oso BLANCO" height={45} width={34}/>
                    <img style={{backgroundColor:"white", border:"1.8px solid #ddd",borderRadius:'4px', padding:'1px 6px'}} src="https://http2.mlstatic.com/D_NQ_NP_2X_745463-MLA42271761802_062020-F.webp" alt="osITO" height={45} width={34}/>
                    <img  style={{backgroundColor:"white", border:"1.8px solid #ddd",borderRadius:'4px', padding:'1px 6px'}} src="https://http2.mlstatic.com/D_NQ_NP_2X_809366-MLA42271794119_062020-F.webp" alt="oso ros" height={45} width={34}/>
                    </div>
                    <Zoom></Zoom>
                 </Bear>
                 
              
               
                <Info/>
                 
              </div>
               
            
               
             
<div>
                <Sale/>
                 
                <SellerInfo/>
              <Guaranty/>
              </div>
               

            </Panel>
          
        </Container2>
    )
}

const Info =() =>{
    return(
        <div>
      
        <Description>
        <div style={{ width:'100vh', height:'63vh', paddingRight:'30px'}}>
            <Carousel></Carousel>
        </div>
        
            <p className="title" style={{marginBottom:'32px'}}>Caracteristicas principales</p>
            <table cellSpacing={0}>
                <tbody>
                    <tr rowspan>

                        <th>Marca</th>
                    <td>Peluches dulzura</td>
                    </tr>
                    <tr rowspan>
                        <th>Modelo</th>
                    <td>Oso</td>
                    </tr>
                    <tr rowspan>
                        <th>Franquicia</th>
                    <td>Arebitos</td>
                    </tr>
                    <tr rowspan>
                        <th>Animal</th>
                    <td>Oso</td>
                    </tr>
                    <tr rowspan>
                        <th>Personaje</th>
                    <td>Oso</td>
                    </tr>
                </tbody>
            </table>
                {/* <div style={{backgroundColor:'red', width:'100%', height:'50vh'}}>
            <Carousel></Carousel>
        </div> */}
       
            <p className="other">Otras características</p>
            <div className="flex">
            <div className="column">
                <p>Material: Peluche</p>
                <p>Es material hipoalergénico: Sí</p>
            
            </div>
            <p className="pleft">Altura x Ancho: 45 cm x 35 cm</p>
            </div>
            <div className="border">
            <h4 className="title">Descripción</h4>
            <p className="bear">Hermosisimo peluche para regalar enamorados. De 45 cm.<br/>
               Entrega en nuestro local de once o te enviamos a todo el país.
            </p>
            </div>
        </Description></div>
    )
}
const Guaranty =() =>{
    return(
        <Section >
            <p style={{fontSize:'18px', opacity:'90%', paddingTop:'12px'}}>Devolución gratis</p>
            <p className="descriptionP">Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!</p>
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
