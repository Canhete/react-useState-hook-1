import React from "react";
import { useState } from "react";

function Username(){

    const [name, setName] = useState({firstName: '', lastName: ''})

    return(
        <form>
            <label>First name: </label>
            <input type="text" value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value })}></input>
            <br />
            <label>Last name: </label>
            <input type="text" value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value })}></input>
            <h3>Your first name is {name.firstName}</h3>
            <h3>Your last name is {name.lastName}</h3>
            <h2>Your full name is {name.firstName} {name.lastName}</h2>
        </form>
    )
}

export default Username