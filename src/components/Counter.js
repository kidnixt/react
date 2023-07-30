import { useState, useEffect } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('')
    //devuelve un array con dos valores
    //el primero es el valor del estado, puntero a la variable
    //el segundo es una funcion que permite modificar el estado

    //el estado es inmutable, no se puede modificar directamente

    //cada vez que alguien haga algun cambio, se va hacer eso de aca
    //cualquier cosa que cambie va a ejecutar el use effect
    useEffect(() => {

        document.title = `Contador: ${counter} - Nombre: ${name}`

    })

    useEffect(() => {
        document.title = `aberga: ${counter}`
    }, [counter])

    const funCounter = () => {
        setCounter(counter + 1)
        //consulto el valor que tiene y le sumo uno
        //si hago counter++ no funciona
        //porque no se puede modificar el estado directamente
    }

    const update = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <input type="button" value="Contar" onClick={funCounter}/>
            <h2>Contador: {counter}</h2>
            <hr/>
            <label htmlFor= 'txtName'> Nombre</label>
            <input type="text" id='txtName' onChange={update}/>
            <p>El nombre es: </p>
            <p>{name}</p>
            <hr/>

        </div>
    )
}

export default Counter