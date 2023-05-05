//props, mecanismo que permite pasar datos de un componente padre a un componente hijo
const Persona = ({nombre}) => {
  //destructuring va con llaves
  //tambien se puede hacer en los parametros de la funcion
  //ya que en react no se utilizan mucho las variables
  //let {nombre} = props
  return (
    <div>Componente dinamico
        <h2>Hola soy {nombre}</h2>
    </div>

  )
}

export default Persona