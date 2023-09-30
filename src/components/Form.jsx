import { useState } from 'react';
import { Button, Input, Box, Alert, AlertIcon, AlertTitle, AlertDescription, Text, } from '@chakra-ui/react';
import { collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore';


const Form = ({ cartItems, totalPrice, onPurchaseSuccess, }) => {
  const [purchaseID, setPurchaseId] = useState(null);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const db = getFirestore();
  const orderCollection = collection(db, 'orden');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nombre === '' || email === '') {
      alert('Existen campos vacíos');
      return;
    }

    try {
      const order = {
        nombre,
        email,
        productos: cartItems.map((item) => ({
          nombre: item.name,
          cantidad: item.quantity,
          precioUnidad: item.price,
        })),
        costoTotal: totalPrice,
        fecha: serverTimestamp(),
      };

      const docRef = await addDoc(orderCollection, order);

      setPurchaseId(docRef.id);
      setShowAlert(true);
      onPurchaseSuccess(); 
      setNombre('');
      setEmail('');
    } catch (error) {
      console.error('Error al agregar la orden:', error);
    }
  };

  return (
    <Box p={4} maxWidth="400px" margin="0 auto" textAlign="center" position="relative">
      {showAlert && (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="250px"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="1"
        >
          <AlertIcon boxSize="50px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Gracias!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Tu compra se realizó con exito con el ID: {purchaseID}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Text marginBottom="30">Por favor complete los campos a continuación para completar su orden.</Text>
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
          Finalizar compra
        </Button>
      </form>
    </Box>
  );
};

export default Form;