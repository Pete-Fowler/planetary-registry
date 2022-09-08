import React from "react"

function Search({ searchBy }) {
    
    
    return (
        <div>
            <input type="text" onChange={(e) => searchBy(e.target.value)} placeholder="Search..."/>
        </div>
    );
}

export default Search;