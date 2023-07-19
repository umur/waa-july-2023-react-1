import { useState } from "react";
import axios from "axios";


function Post({ToPost}){
    const[id,setId]=useState('');
    const[firstName,setFirstname]=useState('');
    const[lastName,setLastName]=useState('');
    const[major,setMajor]=useState('');
    const[coursesTaken,setCorsesTaken]=useState('');

    const postButton=async()=>{
        try{
            const respone=await axios.post('http://localhost:8080/students',{
                id,firstName,lastName,major,coursesTaken});
                console.log(respone.data);
                ToPost(respone.data);
        }
        
     catch(error){
        console.log('error fetching data'+error);
     }
    }
    return(
        <div> 
            <input type="text" value={id} onChange={(e)=>setId(e.target.value) }placeholder="Id" />
            <input type="text" value={firstName} onChange={(e)=>setFirstname(e.target.value)} placeholder="firstName"/>
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="lastName" />
            <input type="text" value={major} onChange={(e)=>setMajor(e.target.value)} placeholder="major" />
            <input tyep="text" value={coursesTaken} onChange={(e)=>setCorsesTaken(e.target.value)} placeholder="coursesTaken" />
            <button className="btn btn-primary" onClick={postButton}> Post</button>
        </div>
    );

}
export default Post;