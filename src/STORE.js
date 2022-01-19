import {atom} from "jotai";

//initial city
export const CITY_ATOM = atom('Oslo');
//initial cities array
export const CITIES_ATOM = atom(['Tokyo', 'Osaka']);

//empty initial object
export const POST = atom({});

//non-empty default array of objects
export const PRE_FILLED_ARTICLES = atom(
    [
        {id: 1, name: "Newspaper article about the Gotham mayor"},
        {id: 2, name: "Internet blogging! Is it the new shit?"},
        {id: 3, name: "NASA is a scam"}
    ]
);



