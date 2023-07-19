import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function EditPerson() {
    const location = useLocation();
    const person = location.state?.person || null;
    const [editedPerson, setEditedPerson] = useState(person);

    const onChange = (event) => {
        const copy = { ...editedPerson };
        copy[event.target.name] = event.target.value;
        setEditedPerson(copy);
    }


    const onEditButtonClicked = () => {
        editPerson()
    }


    const editPerson = async () => {
        try {
            const result = await axios.put(`http://localhost:8080/persons/${editedPerson.id}`, editedPerson);
            console.log(result);
        } catch (error) {
            console.error(error);
        }

    }


    if (!person) {
        // Handle the case when the person data is not available
        return <div>Person data not found</div>;
    }

    // Render the form and populate it with the person's data
    return (
        <form>
            <input type="text"
                name="name"
                value={editedPerson.name}
                onChange={onChange} />

            <input type="text"
                name="age"
                value={editedPerson.age}
                onChange={onChange} />


            <input type="text"
            name="email"
            value={editedPerson.email}
            onChange={onChange} />

            <input
                type="button"
                value="Edit"
                onClick={onEditButtonClicked}
            />
        </form>
    );
}
