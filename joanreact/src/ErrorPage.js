import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate=useNavigate();
    const onClick=()=>{
        navigate("/home")
    }
    return ( 
<div>
    <h1>KO MAAKUTSVAGEI FUTI!!!!</h1>
    <p>Takupai zvatiinazvo kana pane zvamuri kutsvaga zvatisina motsvaga kumwe</p>
<Link to = "/home">Go back to homepage....</Link>
{/* <button onClick={onClick}>DZOKERAI</button> */}

</div>

     );
}
 
export default ErrorPage;