import { useEffect, useState } from "react"

const Prueba = () => {

    const [contenido, setContenido] = useState("")

  //un use effect de esta forma es el comportamiento basico
  //se ejecuta con cada actualizacion del componente
  //con cada reenderizado

  useEffect(() => {

  })
  
  //en ese array voy a poner todas las cosas
  //a las que voy a estar atento
  //si esas cosas cambian, se va a ejecutar el use effect
  //este efecto se va a ejecutar con cualqueir cambio de state de contenido
  useEffect(() => {
  }, [contenido])
  
  //con el array vacio, se ejecuta una sola vez
  //apenas se carga el componente
  useEffect(() => {
  }, [])
  

  return (
    <div>Prueba</div>
  )
}

export default Prueba