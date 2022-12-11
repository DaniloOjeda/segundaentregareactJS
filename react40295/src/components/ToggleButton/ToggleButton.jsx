import React, {useState, useEffect} from "react"

function ToggleButton(props) {
    const [isFavorite, setIsFavorite] = useState(false);  

  
  function handleFavorite () {
    if (isFavorite === true) setIsFavorite(false);
    else setIsFavorite(true);
    /*  setIsFavorite(!isFavorite);  */
  }

  /*console.log("%cRender/update del componente", "color: green");

  useEffect(() => {
    console.log("%cLlamado a API/Database", "color: red");
  }, []);

  useEffect(() => {
    console.log("%cUpdate del componente en useEffect", "color:yellow");
  });*/

  return (
    <button onClick={handleFavorite} 
    className={isFavorite ? "card-favicon favorite" : "card-favicon"}
    >
     {props.icon}
      </button>
  )
}

export default ToggleButton;