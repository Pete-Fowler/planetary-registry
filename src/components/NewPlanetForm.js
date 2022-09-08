import React, { useState } from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({ addPlanet }) {
    
    const [ form, setForm ] = useState({
        name: '',
        climate: '',
        terrain: '',
        population: '',
    })
    
    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:8085/planets', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data => addPlanet(data));
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="climate" value={form.climate} onChange={handleChange} placeholder="Climate" />
            <input type="text" name="terrain" value={form.terrain} onChange={handleChange} placeholder="Terrain"/>
            <input type="text" name="population" value={form.population} onChange={handleChange} placeholder="Population" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;