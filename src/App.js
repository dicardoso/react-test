import { useState } from "react"
import { Dropdown } from "./components/dropdown/Dropdown";

function App() {
  const [selected, setSelected] = useState({})
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Dropdown title={"Selecione seu pokemon favorito"} onSelect={(value) => {setSelected(value)}} />
      <div className="fav">
        <h1>Pokemon Favorito</h1>
        <h2>{selected.name}</h2>
      </div>
    </div>
  );
}

export default App;
