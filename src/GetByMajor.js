import { useState } from "react";
import axios from "axios";



function GetByMajor({ByMajor}){

    const[majorValue,setMajorValue]=useState('');

    const getByMajorButton= async ()=>{
        try{
            const response= await axios.get(`http://localhost:8080/studentsmajor/${majorValue}`)
            ByMajor(response.data)
         } catch(error){
            console.log('error fetching data'+error)

            }
     
    }

    return(
        <div>
            <input type="text" value={majorValue} onChange={(e)=>setMajorValue(e.target.value)}/>
            <button className="btn btn-primary" onClick={getByMajorButton}>Get By major</button>
            
        </div>
    );
        
    
}
export default GetByMajor;