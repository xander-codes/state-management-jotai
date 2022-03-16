import React from "react";
import {useAtom} from 'jotai';
import {CITY_ATOM} from "../../STORE";

const City = () => {
    const [country, setCountry] = useAtom(CITY_ATOM);

    return <div style={{ backgroundColor: "lavender"}}>

        <h5>Country component:</h5>
        <h6>hello, i'm "{country}" value. I come from the CITY_ATOM in STORE.js file with the help of jotai
            library!</h6>
        <hr/>

    </div>
}

export default City;