import {useState} from 'react'
import { Button } from '@chakra-ui/react'

const Form = () => {
    const purchaseID ="700005481"
    const [nombre, setNombre] = useState ("")
    const [email, setEmail] = useState ("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        nombre === ""? alert("Existen campos vacios") : alert (nombre)
        email === ""? alert("Existen campos vacios") : alert (email)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}/>

        <Button type='submit'>Enviar</Button>
    </form>
    
    <p>Tu compra se realizo con el ID: {purchaseID}</p>
    </>
  )
}

export default Form