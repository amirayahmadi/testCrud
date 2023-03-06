import { useEffect ,useState} from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {

    const {empid} = useParams();
    const [empData,setEmpData]=useState({});
    

    useEffect(()=>{
        fetch("http://localhost:8000/employees/"+empid)
        .then((res)=>{
            return res.json();
        })
        .then(resp=>{
            setEmpData(resp)
        })
        .catch((err)=>{console.log(err.message)})
    },[])


    return (  <div className="card" style={{textAlign:"left"}}>
        <div className="card-title">Details of employee</div>
        {empData && 
        <div className="card-body">
            <h1>the name is {empData.name} ({empData.id})</h1>
            <h3>contact details</h3>
            <h3>Email  : {empData.email}</h3>
            <h3>Phone : {empData.phone}</h3>
            <Link to="/" className="btn btn-success">back to list</Link>
        </div>

        }
    </div>);
}
 
export default EmpDetail;