import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";

function Item(props) {
  return (
 
    <div className="card">  
      <ToggleButton icon="♥"/>
        <div clasName="card-img"> 
            <img src={props.imgurl}alt="imagen del producto"></img>
             </div>    
             <div className="card-detail">
             <h2>{props.title}</h2>
             <h4 className="priceTag">$ {props.price}</h4>   
             <p>{props.description}</p>
             </div>
          </div>
  );
}

export default Item;