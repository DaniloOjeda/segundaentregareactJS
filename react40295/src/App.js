import './App.css';
import NavBar from './components/Bootstrap/NavBar';
import ClickCount from './ClickCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
// respuesta de eventos
function handleImageClick () {
  console.log("Click en la imagen");
}

return (
  <>
  <div className="App">
      <header className="App-header">
      <p>Bienvenidos a Mundo Pesca</p>
       <NavBar />
       <ClickCount />
       <ItemListContainer />
      
      </header>
    </div>
   </>
  );
}

export default App;
