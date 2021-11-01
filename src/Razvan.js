import React, {useState} from 'react';

const Razvan = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button style={{backgroundColor: "deeppink", borderRadius: 40}} onClick={() => setCount(count+1)}>{count}</button>
        </>
    )
}

export default Razvan;