//props, mecanismo que permite pasar datos de un componente padre a un componente hijo
const Persona = (props) => {
  return (
    <div>Componente dinamico
        <h2>Hola soy {props.nombre}</h2>
    </div>

  )
}

export default Persona