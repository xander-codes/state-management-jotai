import {atom} from "jotai";

//initial country
export const COUNTRY_ATOM = atom('Germany');
//initial cities array
export const CITIES_ATOM = atom(['Tokyo', 'Osaka']);

export const foo = atom({ name: 'Tokyo', address: 'Osaka'});



