import React from "react";

export const ChildComponent = props => {
    const say = props.say;

    return (
        <div>
            <button onClick={() => say("alex")}>activate</button>
        </div>
    );
};