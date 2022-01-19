import React, {useState} from "react";

const Contacts = () => {
    const [person, setPerson] = useState("");
    const [contacts, setContacts] = useState(["James Smith", "Thomas Anderson", "Bruce Wayne"]);

    function handleChange(e) {
        setPerson(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (person !== "") {
            setContacts([...contacts, person]);
            setPerson("");
        }
        document.getElementById("input1").focus();
    };

    const listItems = contacts.map((val, index) =>
        <li key={index}>{val}</li>
    );


    return (
        <form onSubmit={handleSubmit}>
            <input id="input1"
                   type="text"
                   placeholder="Add new contact"
                   onChange={handleChange}
                   value={person}/>
            <button type="submit">Add</button>
            <br/>
            <span>
                <ol>
                    <ul>{listItems}</ul>
                </ol>
            </span>

        </form>
    );
};

export default Contacts;