import React, {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {CITIES_ATOM} from "../../STORE";

const AddCity = () => {
    const [cities, setCity] = useAtom(CITIES_ATOM);

    const [name, setName] = useState("");

    const handleChange = event => setName(event.target.value);

    useEffect(() => {
        console.log(cities);
    }, [cities]);

    const addCity = () => {
        if (name !== "") setCity([...cities, name]);
        setName("");
    }

    return (
        <div style={{backgroundColor: "lightcyan"}}>
            <h5>AddCity component:</h5>
            <input
                type="text"
                value={name}
                onChange={handleChange}
            />
            <h3>{name}</h3>
            <input type="button" id="button" value='Add'
                   onClick={addCity}/>
        </div>
    );
}

export default AddCity;