import { useState, useRef} from "react"


const List = () => {
    const [lista, setLista] = useState(['A', 'B', 'C'])
    //primero definimos un nombre de variable y un valor inicial
    //nos generamos un sustituo del id del elemento
    //en react NO se puede modificar el DOM directamente
    //Luego en nuestro input le ponemos un atributo ref con el nombre de la variable
    const data = useRef(null)

    const takeData = () => {
        console.log(data.current.value)
        //lista es inmutable
        //NUNCA PUEDO CAMBIAR
        //Hago un nuevo arrary que esta compuesto por el array anterior
        //mas el nuevo elemento
        setLista([...lista, data.current.value])
        data.current.value = ''
    }

  return (
    <div>
        <h1>Lista</h1>
        <label htmlFor="elements">Elemento:</label>
        <input type="text" id="elements" ref = {data}/>
        <input type="button" value="Agregar" onClick={takeData}/>
        {lista.map((item, index) => {
            return (
                <div key={index}>
                    <p>{item}</p>
                </div>
            )
        })}
        <hr/>

    </div>
  )
}

export default List