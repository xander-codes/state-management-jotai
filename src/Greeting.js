import React, { useState } from 'react';
import {useAtom} from "jotai";
import {CITIES_ATOM} from "./STATES";
import axios from "axios";

const Greeting = () => {
    const [greetings, setGreeting] = useState([]);
    const [githubData, setGithubData] = useState({});

    const getGithub = () => {
        axios.get('https://api.github.com/users/mapbox')
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
                console.log(response);
                setGithubData(response.data);
            });
    }

    const getBE = () => {
        axios.get("http://localhost:8080/greet")
            .then(response => {
                console.log(response.data);
                setGreeting(response.data);
            })
    }

    return <>
        <h2>Greetings: </h2>
        <input type="button" value="get from github" onClick={getGithub}/>
        <input type="button" value="get from BE" onClick={getBE}/>
        {greetings.map((greet) => <p key={greet.id}>{greet.content}</p>)}

        <p>{githubData.login}</p>
        <p>{githubData.bio}</p>
        <p>{githubData.url}</p>
    </>
}

export default Greeting;