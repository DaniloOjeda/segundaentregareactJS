import React , {useState, useEffect} from "react";
//importar la promesa
import getItems from "../../service/mockService";
import ItemList from "./ItemList";

function ItemListContainer() {
    console.log("%cRender/update del componente", "color: green");
//creamos un estado para nuestos productos
    const [productos, setProductos] = useState([]);
//creamos un efecto montaje
useEffect ( () => {
//llamamos a la promise y guardamos la respuesta en un estado
    getItems().then((respuesta) => setProductos(respuesta));
},[]);


return (
    <ItemList productos={productos} />
);
}

export default ItemListContainer;