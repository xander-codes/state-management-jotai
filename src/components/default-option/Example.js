import React, {useState} from "react";
import Select from "react-select"

const my_field_options = [
    {value: 1, label: "Daily"},
    {value: 2, label: "Weekly"},
    {value: 3, label: "Monthly"},
]

const Example = ({defaultOption}) => {
    const [values, setValues] = useState(defaultOption);

    function handleSelectChange(newValue, actionMeta) {
        setValues({
            ...values,
            [actionMeta.name]: newValue ? newValue.value : ""
        })
    }

    return <>
        <Select
            name={"my_field"}
            inputId={"my_field"}
            onChange={handleSelectChange}
            options={my_field_options}
            placeholder={values.label}
            isClearable={true}
        />
    </>
}

export default Example
