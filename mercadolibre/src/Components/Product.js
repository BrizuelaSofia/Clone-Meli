import React from "react";
import {Container2, Panel, Bear, Column, Description} from '../styles/GlobalStyles'

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
                <SellerInfo/> */}
                <Bear/>
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

export default Product