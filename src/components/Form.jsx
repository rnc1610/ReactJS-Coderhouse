import { useState } from 'react';
import { Button, Input, Box, Text  } from '@chakra-ui/react';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

const Form = () => {
  const [purchaseID, setPurchaseId] = useState(null);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false); 

  const db = getFirestore();
  const orderCollection = collection(db, 'orden');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nombre === '' || email === '') {
      alert('Existen campos vacíos');
      return;
    }

    try {
      const order = { nombre, email };
      const docRef = await addDoc(orderCollection, order);

      setPurchaseId(docRef.id);
      setIsSuccessful(true); 
      setNombre(''); 
      setEmail('');
      alert(`Tu compra se realizó con el ID: ${docRef.id}`);
    } catch (error) {
      console.error('Error al agregar la orden:', error);
    }
  };

  return (
    <Box p={4} maxWidth="400px" margin="0 auto" textAlign="center">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          mb={2}
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          mb={2}
        />

        <Button type="submit" colorScheme="blue">
          Enviar
        </Button>
      </form>

      {isSuccessful && (
        <Text mt={4} fontWeight="bold">
          Tu compra se realizó con el ID: {purchaseID}
        </Text>
      )}
    </Box>
  );
};

export default Form;