import React from 'react';
import {ChildComponent} from "./ChildComponent";

const sayMyName = (name) => {
    console.log(`your name is ${name}`)
}

const PassMethodInProps = () => {
    return (
        <div>
            <ChildComponent say={sayMyName}/>
        </div>
    );
};

export default PassMethodInProps;
