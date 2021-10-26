import React from "react";
import Country from "./Country";
import CitiesList from "./CitiesList";
import AddCity from "./AddCity";
import Greeting from "./Greeting";


const App = () => (
    <>
        <Country/>
        <AddCity/>
        <CitiesList/>
        {/*<Greeting/>*/}
    </>
);

export default App;