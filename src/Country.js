import React from "react";
import {useAtom} from 'jotai';
import {COUNTRY_ATOM} from "./STATES";

const Country = () => {
    const [country, setCountry] = useAtom(COUNTRY_ATOM);

    return <>
        <h5>Country component:</h5>
        <h6>hello, i'm "{country}" value. I come from the COUNTRY_ATOM in STATES.js file with the help of jotai
            library!</h6>
    </>
}

export default Country;