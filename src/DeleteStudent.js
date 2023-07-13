import axios from "axios";
import React, { useState }  from "react";
function DeleteStudent({studentToDelete}){

    const[id, setId]=useState('');

    const deleteMyStudent=async()=>{
        const result= await axios.delete(`http://localhost:8090/students/${id}`);
        studentToDelete(result.data);
    }
    return(
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="insert Student Id"></input>
            <button onClick={deleteMyStudent}>Delete Student</button>
        </div>
    );
}
export default DeleteStudent;