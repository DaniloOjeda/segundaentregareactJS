import styles from "./button.module.css";
import {useState} from "react";

function Button(props) {
    const [colorButton, setColorButton] = useState(props.color);
    console.log(props);
   
   const styleBtn = { backgroundColor: colorButton};
   
   function changeColor () {
    setColorButton ("red")
   } 

    return (
    <button  onClick={ changeColor } style={styleBtn} className={styles.btn}>
    {props.children  ||  props.text}
    </button>
    );
}



// Button("Clickeame")
// Button("Mundo Pesca")
export default Button;

