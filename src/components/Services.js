import React from "react";
import "./Services.css"
import camera from "./camera.jpg"
import p2 from "./p2.jpg";
import f1 from "./f1.webp"
const Services = () => {
    return (
       <div className="container">
        <div className="service wrapper">
            <div className="service">
                <h3>Welcome to My Services Section</h3>
                <div className="cards">
                    <div className="card">
                    <img src={camera} height={200} width={200}/>
                        <h2>Event photos </h2>
                        <p>I also take photos at events</p>
                    </div>
                    <div className="card">
                        <img src={p2} height={200} width={200}/>
                        <h2>Traveling photos</h2>
                        <p>I am also aveliabl if you want to travel and i also take photos their</p>
                    </div>
                    <div className="card">
                        <img src={f1} height={200} width={200}/>
                        <h2>Footballs photos</h2>
                        <p>I also take photos of players</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}
export default Services;