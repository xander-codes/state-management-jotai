import React from "react";
import {useAtom} from "jotai";
import {CITIES_ATOM} from "../../STORE";

const CitiesList = () => {
    const [cities, setCities] = useAtom(CITIES_ATOM);

    return <div style={{ backgroundColor: "papayawhip"}}>

        <h5>Cities list component (from general store): </h5>

        {cities.map((city, i) => <p key={i}> * {city}</p>)}

        <hr/>

    </div>
}

export default CitiesList;