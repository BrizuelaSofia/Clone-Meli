import React from "react";
 import data from "./data.json"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css"
import { Grid, Navigation} from "swiper";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Carousel() {

  return (
    <div >
      <div>
        <p style={{textAlign:'start', fontSize:'24px', color:"#333"}}>Publicaciones del vendedor</p>
       
      </div>
      <Swiper
        slidesPerGroup={3}
        slidesPerView={3}
       
       
        navigation={true}
        modules={[ Navigation, Grid]}

      >
        {/* Mapeo el data.json, le doy un parametro con una funcion flecha que me va a retornar un array de las imagenes de las product. */}
        {data.map(product => {
          return (

            // Las KEYS ayudan a indentificar que items han cambiado, son agregados o eliminados. Deben ser daas a los elementos dentro del array para darle a los elementos una identidad estable.
            <SwiperSlide className="mySwiper" key={product.id}  >
            <div style={{width:'224px', height:'360px', textAlign:'start', border:'1px solid #f5f5f5', borderRadius:'4px', boxShadow:'0 1px 1px 0rgba(0,0,0,.1)' }} className="card">
                <img src={product.image} alt="oso" width={'100%'} height={224} />
                <div style={{fontSize:'14px', display:'flex', flexDirection:'column'}}>
                <p style={{paddingLeft:'15px', margin:0, fontSize:'22px'}} >{product.price}</p>   
                <p style={{paddingLeft:'15px',color:"#00a650", margin:0}}>{product.offer}</p>   
                <p style={{paddingLeft:'15px', color:"#00a650", margin:0, fontWeight:600}}>{product.free}</p>  
                </div>
            
                 <p style={{paddingLeft:'15px', fontSize:'14px', textAlign:'start', color:'#000', opacity:"80%", width:'196px'}}>{product.Description}</p>
            </div>
              
            </SwiperSlide>
          )
        })
        }
      </Swiper>
      <a href="https://github.com/BrizuelaSofia" target="_blank" rel="noreferrer" style={{fontSize:'14px', color:"#1259c3", textDecoration:'none'}}>Ver más publicaciones del vendedor</a>
    </div>
  );
} 