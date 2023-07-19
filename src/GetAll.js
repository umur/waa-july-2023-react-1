import { useState } from "react";
import axios from "axios";
// import { useNavigate } from 'react-router-dom'
// 
function GetAll(){
  //  const navigate=useNavigate();

 const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);

  const getAllButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:8080/students'); 
      setTableData(response.data);
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // const getByIdclick=()=>{
    // navigate("/getById");
  // }
  return (
    <div className='container'>
       <h4> Student </h4>
             
       <button className="btn btn-primary"onClick={getAllButtonClick}>Get all</button>
      {showTable && (
        <table>
          <thead>
             <tr>
              <th>ID</th>
              <th>FirstName</th>
               <th>LastName</th>
              <th>Major</th>
              <th>CorseseTaken</th>
            </tr> 
            </thead>
            <tbody>
           {tableData.map((item) => (
              <tr key={item.id}>
                 <td>{item.id}</td>
                 <td>{item.firstName}</td>
                 <td>{item.lastName}</td>
                 <td>{item.major}</td>
               <td>{item.coursesTaken}</td>
               </tr>
            ))} 
           </tbody>
         </table>
      )}
       {/* <a  href="/getById"  className="navbar-text me-3" style={{ textDecoration: 'none', color: 'black' }} */}
        {/* // onClick={getByIdclick}> GetById </a> */}
     </div>
     );
    }
    export default GetAll;

