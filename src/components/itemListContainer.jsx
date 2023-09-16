import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'
import { SimpleGrid } from '@chakra-ui/react';

const itemListContainer = () => {
  const {categoria} = useParams();
  const productos =[
    {
      id: 1,
      name: "Sofá Gris", 
      price: 399, 
      description: "Sofá de 3 plazas, +chaiselongue gris oscuro", 
      longDescription: "Como es más alto que en la mayoría de los sofás, el respaldo te ofrece soporte para toda la espalda. 10 años de garantía. Consulta los términos y condiciones en el folleto de la garantía.",
      stock: 200, 
      image: "src/assets/Fotos/producto3.avif",
      categoria: "Living"
    },
    {
      id: 2,
      name: "Mesa",
      price: 50,
      stock: 200,
      description: "Color negro - 110x67 cm ",
      longDescription: "Esta mesa para cuatro combina la calidez de la madera con la resistencia del metal en un diseño esbelto que luce bien incluso en espacios reducidos. Complétala con la silla SANDSBERG si quieres crear un conjunto acogedor y de aspecto homogéneo.",
      stock: 200,
      image: "src/assets/Fotos/producto5.avif",
      categoria: "Living"
    },
    {
      id: 3,
      name: "Cama",
      price: 339, 
      stock: 200, 
      description: "Estructura de cama con 2 cajones", 
      longDescription: "Un diseño sencillo y bonito por todos los lados que te permite poner la cama en medio de la habitación o con el cabecero contra la pared. También cuenta con unos amplios y prácticos cajones de almacenaje con ruedas.",
      stock: 200, 
      image: "src/assets/Fotos/producto2.avif",
      categoria: "Dormitorio"
    },
    {
      id: 4,
      name: "Carrito auxiliar",
      price: 39, 
      stock: 200, 
      description: "Carrito, blanco, 35x45x78 cm", 
      longDescription: "Este carrito entra en cualquier rincón y se puede mover fácilmente de sitio. Úsalo para tener más espacio donde guardar utensilios de cocina, material de oficina o guantes, llaves y teléfonos móviles.", 
      stock: 200, 
      image: "src/assets/Fotos/producto6.avif",
      categoria: "Cocina"
    },
    {
      id: 5,
      name: "Cajonera", 
      price: 304, 
      stock: 200, 
      description: "Para bajo cocina - blanco y efecto roble, 60x60 cm", 
      longDescription: "El sistema de cocina METOD te ofrece muchísimas posibilidades para diseñar la cocina de tus sueños. Con los frentes con efecto roble y tiradores integrados, aportarás un toque acogedor y natural.",
      stock: 200, 
      image: "src/assets/Fotos/producto1.avif",
      categoria: "Cocina"
    },
    {
      id: 6,
      name: "Silla", 
      price: 19, 
      stock: 200, 
      description: "Silla, marrón rojizo", 
      longDescription: "Una cómoda y resistente silla con estructura de metal, un asiento blando y un respaldo con forma curvada. Se caracteriza por un diseño sencillo y atemporal con un toque moderno que ocupa poco espacio a un precio increíble.",
      stock: 200, 
      image: "src/assets/Fotos/producto4.avif",
      categoria: "Living"
    },
]

const mostrarProductos = new Promise((resolve, reject) => {
  if (productos.length > 0) {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  } else {
    reject("No se pueden mostrar los productos")
  }
})

mostrarProductos
  .then ((resultado)=> {
    console.log(resultado)
  })
  .catch ((error)=>{
    console.log(error)
  })

  const productosFiltrados = productos.filter((producto) => producto.categoria === categoria)

return (
  <>
    <ItemList productos={productosFiltrados} />
  </>
)
}

export default itemListContainer