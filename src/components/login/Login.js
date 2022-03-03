import React, {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const show = (e) => {
        e.preventDefault()
        console.log(username, password)
    }

    return (
        <form onSubmit={show}>
            <input
                // id="username"
                type="text"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <input
                // id="password"
                type="text"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <button type="submit">Add</button>
            <br/>
        </form>
    );
}

export default Login;
