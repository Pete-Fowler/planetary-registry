import React from "react"
import Planet from "./Planet"

function PlanetList({ planetsShown }) {
    
    const planets = planetsShown.map(planet => 
        <Planet 
            key={planet.id} 
            name={planet.name} 
            climate={planet.climate}
            terrain={planet.terrain} 
            population={planet.population}
        />)

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {planets}
            </tbody>
        </table>
    );
}

export default PlanetList;