import { useState } from "react";
import axios from "axios";

export default function CreatePerson() {

    const [personState, setPersonState] = useState({
        name: "",
        age: 0,
        email: ""
    });



    const onChanged = (event) => {
        const copy = { ...personState };
        copy[event.target.name] = event.target.value;
        setPersonState(copy);
    }


    const onCreateButtonClicked = () => {
        createPerson()
    }


    const createPerson = async () => {
        try {
            const result = await axios.post("http://localhost:8080/persons", personState);
            console.log(result);
        } catch (error) {
            console.error(error);
        }

    }


    return (

        <div>
            Name: <input
                type="text"
                onChange={onChanged}
                value={personState.name}
                name='name'
            />


            Age: <input
                type="text"
                onChange={onChanged}
                value={personState.age}
                name="age"
            />

            Email: <input
                type="text"
                name="email"
                onChange={onChanged}
                value={personState.email}
            />

            <input
                type="button"
                value="Create"
                onClick={onCreateButtonClicked}
            />

        </div>
    )


}