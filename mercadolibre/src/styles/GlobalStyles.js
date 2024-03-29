import styled from "styled-components";
import { GoLocation, GoStar } from "react-icons/go";
import { FaMedal } from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import { GrTrophy } from "react-icons/gr";
import { TbArrowBack } from "react-icons/tb";
import { BsHeart, BsTruck } from "react-icons/bs";

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
    
    // border-left:1px solid  rgba(0,0,0,.2);
    
    
    
  
   
    
}
}
span{
    padding:8px
}
a.black{
    color:#000000;
    opacity:90%;
   margin-right:1px
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
flex-wrap:wrap



`
export const Panel = styled.div`
background-color:#fff;
box-shadow:0 1px 3px 0 rgba(0,0,0, .3);
display:grid;
grid-template-columns:67fr 33fr;
// display:flex;



`
export const Bear = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:515px;

margin-bottom:50px;
padding-left:10px





`
export const Description = styled.div`
border-top: 1px solid #ddd;
width:88%;
margin:0 auto;
padding:20px 0;
table{
  border:.2px solid #ebebeb;
  border-radius:6px;
   
}

th{
  text-align:start;
  padding:15px 24px 15px 16px;
  width:20vh;
  color:#000;
  opacity:90%;
  font-weight:600;


 
}

table tr:nth-child(odd){
    td{
         background-color:#f5f5f5
    }
    th{
        background-color:#ebebeb
    }
   
}
table tr:nth-child(even){
    th{
         background-color:#f5f5f5
    }
    
   
}


 
}
td{
    
    width:100vh;
padding-left:24px;
font-size:16px;
color:#000;
opacity:90%;
}
.border{
   
    margin-top:35px;
    padding-top:5px
}

.title{
    border-top: 1px solid #ddd;
    padding-top:40px;
    font-size:24px;
    line-height:30px;
    color:#000;
    opacity:90%;
    font-weight:400
}
.other{
    font-size:20px;
    line-height:25px;
    color:#000;
    opacity:90%;
   
    margin-top:32px;

}
.flex{
    display:flex;
    font-size:14px;
    
}
.pleft{
    margin-left:12rem
   
  
 
}

.bear{
    font-size:20px;
    line-height:27px;
    color:#666;
    opacity:90%
}


`
export const Section = styled.div`
padding:0px 16px;
margin-top:16px;
padding-bottom:35px;
margin-bottom:16px;
margin-left:22px;
margin-right:16px;
border:1px solid #ddd;
border-radius:8px 8px 0 0;


p.title-guaranty{
    font-size:18px;
    color:#000;
    opacity:90%;
    border-top:1px solid #ddd;
    padding-top:33px;
    margin-top:33px;
   
    
  
}


p.title{
    font-size:16px;
    color:#000;
    opacity:90%;
    margin-top:27px;
    margin-bottom:10px
    

}
p.descriptionP{
    font-size:14px;
    color:#000;
    opacity:55%;
    margin-top:25px;
    margin-bottom:22px 
}
p.description{
    font-size:14px;
    color:#000;
    opacity:55%;
    padding-bottom:5px;
    padding-top:0;
    margin-top:0
   
}
a.link{
    text-decoration:none;
    color:#3483fa;
    font-size:14px;
    
   
  
   
  
}
`

export const Container3 = styled.div`
padding:14px 16px;
margin-top:16px;
padding-bottom:35px;
margin-bottom:16px;
margin-left:22px;
margin-right:3px;
display:flex;
flex-direction:column;
border:1px solid #ddd;
border-radius:8px;




.seller-title{
    font-size:18px;
    margin-bottom:15px;
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
    
    color:#000;
    opacity:90%;

    
}
.left{
    padding-left:10px;
    
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
    bottom:16px;
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
export const GoldIcon = styled(FaMedal)`
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
grid-gap:2px;
padding:0 2px;
margin-top:10px;
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
    font-weight:400
    
    


   

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

// Container4, State, Row3, HeartIcon, Price, Card2, Stock, ButtonCard, Button, Benefits, TrophyIcon, CheckIcon
export const Container4 = styled.div`
display:flex;
width:290px;
height:792;
flex-direction:column;
padding:20px 45px;
padding-left:16px;

margin-top:16px;
margin-left:22px;
border:1px solid #ddd;
border-radius:8px;





`
export const State = styled.div`
font-size:14px;

margin-top:3px;
color:#000;
opacity:55%;

`
export const Row3 = styled.div`


>h1{
    width:100%;
    font-size:22px;
    line-height:25.9px;
    color:#000;
    margin-top:8px;
    margin-bottom:0;
    height:70px;
    opacity:90%;
    font-weight:500;
}

`
export const HeartIcon = styled(BsHeart)`
position:relative;
left:102.5%;
bottom:66px;

font-size:21px;
color:#3483fa;



`
export const Price = styled.div`
>span{
font-size:36px;
line-height:36px;
margin:0;
padding:24px 0;
font-weight:300;
color:#000;
opacity:90%;

}
.black{
        margin-top:2px;
        margin-bottom:1px;
        font-size:18px;
        color:#000;
        opacity:90%
}
.green{
    font-size:18px;
    color:#00a650;
    font-weight:400;
    padding:0;
    
}
.doble{
    margin-top:0;
    margin-bottom:5px;
    font-size:14px;
    color:#00a650;
    font-weight:500;
}
.point{
    color:#000;
    opacity:90%;
    font-weight:400;
    padding:3px
    
}
.link{
    font-size:14px;
    color:#3483fa;
    font-weight:400;
    text-decoration:none;
    padding-left:1px;

}
.link:hover{
    color:#2a6acb;
}


`
export const Card2 = styled.div`

display:flex;
flex-direction:column;
margin-bottom:2rem;
.top{
    
    margin-right:10px
}
>div{
    margin-top:16px;
    margin-left:4px;
    display:flex;
    flex-direction:column;
    
    .title{
        font-size:16px;
        margin-top:5px;
        color:#00a650;
        padding-left:6px;
    }
    .left{
       padding:2px
    }
    .text{
        font-size:14px;
        color:#000;
        opacity:55%;
        padding-left:26px

    }
    .link{
        font-size:14px;
        margin-top:5px;
     
        margin-left:26px;
        color:#3483fa;
     
        text-decoration:none;
    }
    .link:hover{
        color:#2a6acb;
    }
}


`
export const Stock = styled.div`
>h5{
    font-size:16px;
    color:#000;
    font-weight:600;
    margin-top:0;
   
   
   
}
>p{
    
    margin-bottom:25px
}
p>strong{
    font-weight:600
}
p>span{
   color:#000;
   opacity:55%;
   font-size:14px;
   padding:0;
   
 
}
input{
    width:20px;
    color:#3483fa;
   border-left:1px solid #3483fa;
   border-right:1px solid #3483fa;
   border-top:none;
   border-bottom:none;
   outiline:0;
}

`
export const ButtonCard = styled.div`
margin-top:16px;
display:flex;
flex-direction:column;
align-items:center;
justify-content-center;
font-size:15px;
margin-left:23px;
margin-right:3px;
margin-bottom:10px;
outline:0;
cursor:pointer;


.solid{
    background-color:#3483fa;
    color:white; 
}
.solid:hover{
background-color:#2968c8;

}

.light{
    margin-top:8px;
    background-color:rgba(65,137,230,.15);
    color:#3483fa;
}
.light:hover{
    background-color:rgba(65,137,230,.25);
   
    }
Button{
    font-size:16px;
    margin-left:10px;
    width:120%;
    padding:0;
    border-radius:6px;
    text-transform:lowercase;
    transition:all 300ms ease-in-out;
}
Button>p{
   margin-top:10px;
   margin-bottom:10px;
}
Button p:first-letter{
    text-transform:uppercase;
}

`
export const Button = styled.div`
.solid{
    background-color:#3483fa;
    color:white;

}



`
export const Benefits = styled.div`


display:flex;
flex-direction:column;
.row{
    display:flex;
    
    p{
        margin-left:10px;
        font-size:14px;
        color:#3483fa;
    }
    p>span{
        color:#000;
        opacity:55%;
        padding:0;
        margin:0
    }
    .bottom{
        margin-bottom:8px;
        margin-top:2px;
    }
}

`
export const TrophyIcon = styled(GrTrophy)`
width:14px;
color:#000;
opacity:55%;
padding-left:3px;
padding-top:2px;


`
export const CheckIcon = styled(BiCheckShield)`
width:33px;
height:27px;
padding-top:10px;
color:#000;
opacity:55%;

`
export const Column = styled.div`


`
export const StarIcon = styled(GoStar)`
color:#3483fa;
padding:1px;
font-size:16.5px;
margin-bottom:10px;
margin-top:0;
position:relative;
bottom:7px;



`
export const TruckIcon = styled(BsTruck)`

position:relative;
right:3px;
top:5px;
font-size:20px

`
export const ArrowIcon = styled(TbArrowBack)`
position:relative;
right:5px;
top:5px;
font-size:23px;
color:#00a650;

`













