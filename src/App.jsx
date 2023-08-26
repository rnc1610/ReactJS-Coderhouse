import MiPrimerComponente from "./components/MiPrimerComponente";
import { useState } from "react";
const App = () => {
/*Lo de abajo son estados/hooks */
  const [contador,setContador] = useState("0")
  const [mensaje, setMensaje] = useState ("Mensaje inicial")
  const [data, setData] = useState ([])
/*Lo de abajo son props */
  const curso = "React JS"
  const greeting = "Bienvenido"

return (
    
<>

<h1>{contador}</h1>
<button onClick={() => setContador(contador + 1)}>Sumar</button>
<button onClick={() => setContador(contador - 1)}>Restar</button>
<h2>{mensaje}</h2>
<button onClick={() => setMensaje("Mensaje modificado")}>Cambiar Mensaje</button>
<button onClick={() => setMensaje("Mensaje inicial") }>Revertir Mensaje</button>

 <h1>APP.jsx</h1>

 <MiPrimerComponente
 curso={curso}
 usuario={true}
 greeting={greeting}

 />

</>  
  )
}

export default App
