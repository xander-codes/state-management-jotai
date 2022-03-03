import React, {useState} from "react";

const LoginDynamicState = () => {

    const [inputValues, setInputValues] = useState({username: '', password: ''});

    const handleOnChange = event => {
        const {id, value} = event.target;
        setInputValues({...inputValues, [id]: value});
    };

    const show = (e) => {
        e.preventDefault()
        console.log(inputValues)
    }

    return (
        <form onSubmit={show}>
            <input
                id="username"
                type="text"
                value={inputValues.username}
                onChange={handleOnChange}
            />
            <input
                id="password"
                type="text"
                value={inputValues.password}
                onChange={handleOnChange}
            />
            <button type="submit">Add</button>
            <br/>
        </form>
    );
}

export default LoginDynamicState;
