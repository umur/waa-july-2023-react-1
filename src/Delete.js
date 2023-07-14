import { useState } from "react";
import axios from "axios";

function Delete({ToDelete}){
    const[id,setId]=useState('');

    const deleteByIdButton=async()=>{
    const response = await axios.delete(`http://localhost:8080/students/${id}`)
    ToDelete(response.data);
    }
     return(
        <div>
              <input type="text" value={id} onChange={(a)=>setId(a.target.value)}/>
                <button onClick={deleteByIdButton}>Delete</button>
        </div>
     );
}
export default Delete;