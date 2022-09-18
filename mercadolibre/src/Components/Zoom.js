import React from 'react';
import ReactImageMagnify from "react-image-magnify";
import '../App.css'

export default function Zoom() {
  return (
    <div  className="image-product" style={{width:'450px', height:'400px'}}>
       
        <ReactImageMagnify
          {...{
            
            enlargedImagePortalId: 'right-zoom',
          
        
        
            smallImage: {
              isFluidWidth: true,
              src: "https://http2.mlstatic.com/D_NQ_NP_902530-MLA40254269277_122019-O.webp",
             
            }, 
              largeImage: {
                
              src: "https://http2.mlstatic.com/D_NQ_NP_902530-MLA40254269277_122019-O.webp",
              width:965,
              height:1040,
           
             
            
            }, 
           
            enlargedImageContainerStyle: {
             zIndex:"1000",
           
            },
            enlargedImageContainerDimensions: {
              width:'78%',
              height: "89%",
       
          
            }, 
        
           shouldUsePositiveSpaceLens:true, 
            lensStyle:{
            backgroundColor:'rgba(0,0,0,.4)', 
            backgroundImage:'none', 
            cursor:'zoom-in', transform:'none'},
           
            
        

          }} 
          
        />
      <div id="right-zoom"></div>
      </div>
 
  );
}

