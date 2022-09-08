import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [ planets, setPlanets ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');

    useEffect(() => {
        fetch('http://localhost:8085/planets')
        .then(res => res.json())
        .then(data => setPlanets(data))
    }, [])

    function addPlanet(planetObj) {
        console.log(planetObj);
        setPlanets(planets => [...planets, planetObj]);
    }

    function searchBy(string) {
        setSearchTerm(string);
    }

    const planetsShown = planets.filter(planet => 
        planet.name.toLowerCase().includes(searchTerm.toLowerCase()) || planet.climate.toLowerCase().includes(searchTerm.toLowerCase()) 
        || planet.terrain.toLowerCase().includes(searchTerm.toLowerCase()) || planet.population.toLowerCase().includes(searchTerm.toLowerCase()));

    return(
        <div className="registry">
            <Search searchBy={searchBy}/>
            <div className="content">
                <PlanetList planetsShown={planetsShown}/>
                <NewPlanetForm addPlanet={addPlanet}/>
            </div>
        </div>
    )
}

export default Registry;