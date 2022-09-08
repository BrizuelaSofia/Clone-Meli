import React from 'react';
import ReactImageMagnify from "react-image-magnify";


export default function Zoom() {
  return (
    <div style={{width:'450px', height:'400px'}}>
      
        <ReactImageMagnify
          {...{
            smallImage: {
              isFluidWidth: true,
              src: "https://http2.mlstatic.com/D_NQ_NP_902530-MLA40254269277_122019-O.webp",
            
            },
            largeImage: {
              src: "https://http2.mlstatic.com/D_NQ_NP_902530-MLA40254269277_122019-O.webp",
              width:700,
              height:800
              
            },
            enlargedImageContainerStyle: {
             zIndex:"1000"
            },
            enlargedImageContainerDimensions: {
              width: "50%",
              height: "70%",
              
          
            },
           shouldUsePositiveSpaceLens:true, lensStyle:{backgroundColor:'color:rgba(0, 0, 0, 0) '}
          }}
        />
      </div>
 
  );
}
