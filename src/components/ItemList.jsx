import React from 'react'
import Item from './Item'
import { SimpleGrid } from '@chakra-ui/react'

const ItemList = ({productos}) => {
    return (
        <SimpleGrid columns={3} spacing={4} justifyItems="center">
          {productos.map((p) => (
            <Item
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              stock={p.stock}
              description={p.description}
              longDescription={p.longDescription}
              image={p.image}
              categoria={p.categoria}
            />
          ))}
        </SimpleGrid>
      );
    };

export default ItemList