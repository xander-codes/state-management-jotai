import React from "react";
import {useAtom} from "jotai";
import {CITIES_ATOM} from "./STATES";

const AddCity = () => {
    const [cities, setCity] = useAtom(CITIES_ATOM);

    const addCity = () => {
        setCity([...cities, "Kyoto"])
    }

    return (
        <>
            <h5>AddCity component:</h5>
            <input type="button" id="button" value='press me to add "Kyoto" to cities list'
            onClick={addCity}/>
        </>
    );
}

export default AddCity;