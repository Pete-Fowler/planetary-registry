import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [ planets, setPlanets ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8085/planets')
        .then(res => res.json())
        .then(data => setPlanets(data))
    }, [])

    function addPlanet(planetObj) {
        console.log(planetObj);
        setPlanets(planets => [...planets, planetObj]);
    }

    const planetsShown = planets;

    return(
        <div className="registry">
            <Search />
            <div className="content">
                <PlanetList planetsShown={planetsShown}/>
                <NewPlanetForm addPlanet={addPlanet}/>
            </div>
        </div>
    )
}

export default Registry;