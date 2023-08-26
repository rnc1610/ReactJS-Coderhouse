const MiPrimerComponente = ({ curso, usuario, greeting }) => {
  
    return (
    <>
        <div>{curso}</div>
        <h1>{greeting}</h1>
        <h2>{usuario? "Es usuario": "No es usuario"}</h2>
    </>
  );
};

export default MiPrimerComponente





