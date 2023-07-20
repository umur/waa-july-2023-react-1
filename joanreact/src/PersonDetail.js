import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router"



export default function PersonDetail() {

    const params = useParams();
    const [personsState, setpersonsState] = useState({})

    const getPersonsById = async () => {
        const result = await axios.get('users/' + params.id);
        setpersonsState(result.data);
    }


    const handleDeletePerson =async  () => {
        try {
           
            await axios.delete(`users/${params.id}`);
        
            console.log("Person deleted successfully!");
        
          } catch (error) {
            console.error("Error deleting person:", error);
          }
    };


    const handleUpdatePerson = async (updatedData) => {
        try {
          // Perform the update request to the API
          const updatedPerson = { ...personsState, ...updatedData }; // Merge the updated data with the current person object
      
          await axios.put(`users/${params.id}`, updatedPerson);
      
          // Update the state with the updated person object
        //   setPersonsState(updatedPerson);
      
          console.log("Person updated successfully!");
        } catch (error) {
          console.error("Error updating person:", error);
        }
      };
      






    // const handleUpdatePerson = async (req,res) => {
    //     try {
         
    //       const updatedPerson = { ...personsState }; 
    //       updatedPerson.firstName = req.body.firstName; 
    //       updatedPerson.lastName = req.body.lastName; 
    //       updatedPerson.email = req.body.email; 
    //       await axios.put(`users/${params.id}`, updatedPerson);
      
    //       // Update the state with the updated person object
    //       //setPersonsState(updatedPerson);
      
    //       console.log("Person updated successfully!");
    //     } catch (error) {
    //       console.error("Error updating person:", error);
    //     }
    //   };

    useEffect(() => {
        getPersonsById();
    }, [params.id])

    return (

        <div className="person-detail">
            <h2>Person Detail</h2>
            <div>
                <strong>Name: </strong>
                {personsState.firstName}
            </div>
            <div>
                <strong>LastName: </strong>
                {personsState.lastName}
            </div>
            <div>
                <strong>Email: </strong>
                {personsState.email}
            </div>
            <div>
                <strong>Password: </strong>
                {personsState.password}
            </div>
            <button onClick={handleUpdatePerson}>Update</button>
            <button onClick={handleDeletePerson}>Delete</button>



        </div>
    );


}