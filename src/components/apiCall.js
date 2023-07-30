import { useEffect, useState } from "react"

const ApiCall = () => {

  const [personas, setPersonas] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            setPersonas(data.results)
            }
        )
    }, [])

  return (
    <div>
        <div>
        <h1>Api Call</h1>
        {personas.map((persona, index) => {
            return (
                <div key={index}>
                    <p>{persona.name.first}</p>
                    <p>{persona.name.last}</p>
                    <p>{persona.email}</p>
                    <img src={persona.picture.large} alt=""/>
                </div>
            )
        }
        )}
        </div>
        <hr/>

    </div>


  )
}

export default ApiCall