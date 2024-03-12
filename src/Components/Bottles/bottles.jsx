import React, { useState } from 'react';
import "./bottle.css"
export const Bottles = ({bottle,handleClick}) => {
    let {name,img,category,seller,stock,ratingsCount,id,shipping,quantity,price} = bottle;
    // console.log(bottle.name);
    // console.log(bottle);
    const [backgroundColor, setBackgroundColor] = useState("#000");

    const handleButtonClick = () => {
        if (backgroundColor === '#000') {
            setBackgroundColor('lightblue');
        } else {
            setBackgroundColor('#000');
        }

        
           
    };
  return (
    <div className="bottles" style={{ backgroundColor: backgroundColor }}>
        <h2>name : {name}</h2>
        <img src={img} alt="" />
        <h6>Category : {category}</h6>
        <h5>Seller : {seller}</h5>
        <h6>Rating : {ratingsCount}</h6>
        <h6>Stock : {stock}</h6>
        <h6>Shipping : {shipping}</h6>
        <h3>Price : ${price}</h3>
        <button onClick={() => { handleButtonClick(); handleClick(); }}>Purchase</button>

     

        
    </div>
  )
}
