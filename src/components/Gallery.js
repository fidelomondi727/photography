import React, { useState } from "react";
import datamain from "./data";
import "./Gallery.css";
function Gallery ({heading,title,data}) {
     
    return (
        <div className="gallery-main">
            <h1>{heading}</h1>
            <h2>{title}</h2>
            {
                datamain.data.map((result) =>{
                    return (
                        <div className="pics" key={result}>
                        <img src={result.image} style={{width:'100%'}}/>
                        <p>{result.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Gallery;