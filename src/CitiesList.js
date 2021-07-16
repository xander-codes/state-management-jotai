import React from "react";
import {useAtom} from "jotai";
import {CITIES_ATOM} from "./STATES";

const CitiesList = () => {
    const [cities, setCities] = useAtom(CITIES_ATOM);

    return <>
        <h5>Cities list component: </h5>
        {cities.map((city, i) => <p key={i}>{city}</p>)}
    </>
}

export default CitiesList;