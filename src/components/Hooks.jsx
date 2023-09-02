//Clase 2 de Septiembre
import React from 'react'
import {useState , useEffect } from 'react'

const Hooks = () => {

    const [cantidad, setCantidad]= useState (0)
    const [nombre, setNombre]= useState ("Primer Nombre")
    const onAdd=()=>{
        alert(`Agregado al Carrito: ${cantidad} unidades`)
    //se puede hacer un push al carrito de esto mismo
    }
//se ejecuta la primera vez o cuando se actualiza un valor
//la variable que va dentro del array [] es lo que observa el useEffect 
//y si eso cambia ejecuta lo que dice useEffect
// se utiliza para buscar info de una database y traerlo (fetch)
    useEffect ( ()=>{
console.log('useEffect..')
    },[cantidad, nombre])

  return (
    <div>
         <h2>useState</h2>
         <p>{cantidad}</p>
         <button onClick={()=> setCantidad(cantidad + 1)}>Sumar</button>
         <button onClick={()=> setCantidad(cantidad - 1)}>Restar</button>
         <button onClick={()=> alert("Agregado al Carrito")}>Agregar</button>
         <h2>useEffect</h2>
         <p>{nombre}</p>
         <button onClick={()=> setNombre("Nombre Modificado")}>Cambiar</button>

    </div>
  )
}

export default Hooks