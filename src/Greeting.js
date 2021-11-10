import React, {useState} from 'react';
import axios from "axios";
import * as superagent from "superagent";
import {clg} from "./UtilFunctions";

const Greeting = () => {
    const [greetings, setGreeting] = useState([]);
    const [githubData, setGithubData] = useState({});

    // const getGithub = () => {
    //     axios.get('https://api.github.com/users/mapbox')
    //         .then((response) => {
    //             console.log(response.data);
    //             console.log(response.status);
    //             console.log(response.statusText);
    //             console.log(response.headers);
    //             console.log(response.config);
    //             console.log(response);
    //             setGithubData(response.data);
    //         });
    // }

    const getGithub = async () => {
        // const r = await fetch('https://api.github.com/users/mapbox')
        //     .then(r =>console.log(JSON.stringify(r)))
        //     .then(json => console.log(json));
        const response = await axios.get('https://api.github.com/users/mapbox');
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
        clg(response);
        setGithubData(response.data);
    }

    const getBE = async () => {
        // const response = await ky.get('https://api.github.com/users/mapbox');
        // console.log(response);

        // const a = await axios.get('https://api.github.com/orgs/axios');
        // console.log(a);
        //
        // const f = await fetch('https://api.github.com/orgs/axios');
        // const r = await f.json();
        // console.log(r);

        // axios.get("http://localhost:8080/greet")
        //     .then(response => {
        //         console.log(response.data);
        //         setGreeting(response.data);
        //     })
        // let resp = await axios('http://localhost:8080/greet');
        // console.log(resp.data);

        // superagent.get('https://api.github.com/users/mapbox')
        //     .end((err, res) => {
        //         if (err) {
        //             return console.log(err);
        //         }
        //         console.log(res.body);
        //         // console.log(res.body);
        //     });

        const res = await superagent.get('http://localhost:8080/greet');
        console.log(res);
    }

    const postBE = async () => {
        // let response = await axios.post("http://localhost:8080/greet", {
        //     'content': "hy",
        //     'address': {
        //         'street': 'strada 1',
        //         'number': 13
        //     }
        // });
        // console.log(response.data);
        const res = await superagent
            .post("http://localhost:8080/greet")
            .send({
                'content': "hy",
                'address': {
                    'street': 'strada 1',
                    'number': 19
                }
            });
        console.log(res.body);
    }

    return <>
        <h2>Greetings: </h2>
        <input type="button" value="get from github" onClick={getGithub}/>
        <input type="button" value="get from BE" onClick={getBE}/>
        <input type="button" value="POST from BE" onClick={postBE}/>
        {greetings.map((greet) => <p key={greet.id}>{greet.content}</p>)}

        <p>{githubData.login}</p>
        <p>{githubData.bio}</p>
        <p>{githubData.url}</p>
    </>
}

export default Greeting;