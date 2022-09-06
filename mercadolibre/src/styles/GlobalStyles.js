
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { FaMedal} from "react-icons/fa";
import { WiTime8} from "react-icons/wi";
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
export const Section =styled.div`
padding:0 16px 22px ;
margin:5px 16px;
border:1px solid #ddd;
border-radius:8px 8px 0 0;


p.title-guaranty{
    font-size:18px;
    color:#000;
    opacity:90%;
    border-top:1px solid #ddd;
    padding-top:30px;
    margin-top:30px
    
  
}


p.title{
    font-size:16px;
    color:#000;
    opacity:90%;
    

}
p.description{
    font-size:14px;
    color:#000;
    opacity:55%;
    padding-bottom:10px;
}
a.link{
    text-decoration:none;
    color:#3483fa;
    font-size:14px;
  
   
  
}
`

export const Container3 = styled.div`
padding:20px 16px;
margin:32px 16px 18px;
display:flex;
flex-direction:column;
border:1px solid #ddd;
border-radius:8px;




.seller-title{
    font-size:18px;
    margin-bottom:20px;
    color:#000;
    opacity:90%;

}
`
export const Card = styled.div`
display:flex;
flex-direction:column;
text-align:start;

>div{
    margin-left:5px;
   
    
      
    
}
div>p{
    font-size:16px;
    line-height:18.9px;
    color:#000;
    opacity:90%;

    
}
.left{
    padding-left:10px
}
.top{
position:relative;
bottom:20px;
left:10px;
height:48px;
}
p.green{
    color:#00a650;
    line-height:21.6px;
    font-weight:400;
   
    
}
.strong{
    position:relative;
    bottom:10px;
   color:#000;
   opacity:55%;
   font-weight:100;
   font-size:14px;
}
`
export const LocationIcon = styled(GoLocation)`
opacity:.5px;
padding-top:17px;


`
export const GoldIcon= styled(FaMedal)`
opacity:.5px;
color:#00a650;

`
export const Items = styled.div`

display:flex;
flex-direction:column;
align-items:center;



`
export const Box = styled.ol`
list-style:none;
width:100%;
display:grid;
grid-template-columns: repeat(5, 1fr);
grid-gap:7px;
padding:0 4px;
>li{
    width:93%;
    height:8px;
    
   
&:nth-child(1){
    background-color:#fff0f0;
}
&:nth-child(2){
    background-color:#fff5e8;
}
&:nth-child(3){
    background-color:#fffcda;

}
&:nth-child(4){
    background-color:#f1fdd7;
}
&:nth-child(5){
    background-color:#39b54a;
    height:12px;
   
  
   
    
}

}

`
export const Row2 = styled.div`

display:flex;
flex-direction:row;
align-items:flex-start;
// border:1px solid #ddd;


div{
    width:40%;
    height:4.5rem;
    display:flex;
    flex-direction:column;
    text-align:center;
    margin-bottom:24px;
   
    
  
}

div.border{
    border-left:1px solid #ddd;
    border-right:1px solid #ddd;
    
}
.number{
    font-size:22.5px;
    color:#000;
    
    


   

}

span{
    font-size:12px;
    color:#000;
    opacity:70%;
    line-height:12px;
    letter-spacing:normal;
    padding-top:8px
   
   
}


img{
    padding-left:40px
}

`
export const SupportIcon = styled.div`


`
export const Link = styled.div`
a.link{
    
    text-decoration:none;
    color:#3483fa;
    font-size:14px;
   
 
}

`


export const Column = styled.div`


`






