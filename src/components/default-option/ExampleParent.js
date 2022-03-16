import React from 'react';
import Example from "./Example";

const ExampleParent = () => {
    return (
        <div>
            <Example defaultOption={{value: 2, label: "default option"}}/>
        </div>
    );
};

export default ExampleParent;