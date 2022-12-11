import React from 'react';
import Flex from "../Flex/Flex";
import Item from "./Item";

function ItemList(props) {
  return (
    <Flex>
{props.productos.map((item) => (
    <Item 
    key={item.id}
    imgurl={item.imgurl} 
    title={item.title} 
    price={item.price} 
    description={item.description} 
    />
    ))}
</Flex>
  )
}

export default ItemList;