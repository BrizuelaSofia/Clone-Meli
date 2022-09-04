
import styled from "styled-components";
//contenedor que separa las dos filas.
//&+a (aplicaseló a los a a partir del segundo.)

//NAV

export const Container1 = styled.div`
padding-top:12px;
display:flex;
justify-content:space-between

`

export const Row = styled.div`
>a{
    font-size:14px;
    text-decoration:none;
    color:#3483fa;
    padding:2.5px 0;
    transition:all 300ms ease-in-out;

& + a{
    padding-left:10px;
    margin-left:10px;
    border-left:1px solid  rgba(0,0,0,.2);
    
    
  
   
    
}
}
a.black{
    color:#000000;
    opacity:90%;
}
a:hover{
    color:#2968c8;
}


`
//PRODUCT.
export const Container2 = styled.div`
display:flex;
flex-direction:column;
margin-top:12px;



`
export const Panel = styled.div`
background-color:#fff;
box-shadow:0 1px 3px 0 rgba(0,0,0, .3);
display:grid;
grid-template-columns:67fr 33fr;



`
export const Bear = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:530px;

>img{
    height:75%;
}


`
export const Description = styled.div`
border-top: 1px solid #ddd;
width:88%;
margin:0 auto;
padding:20px 0;

>h4{
    
    font-size:24px;
    line-height:30px;
    color:#000;
    opacity:90%;
}
>p{
    font-size:20px;
    line-height:27px;
    color:#666;
}


`


export const Column = styled.div`


`






