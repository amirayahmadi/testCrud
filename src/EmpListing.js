import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const  EmpListing = () => {

const [empData,setEmpData]=useState(null);
const navigate = useNavigate()



const detailFunction=(id)=>{
    navigate("/employee/detail/"+id)
}



const editFunction=(id)=>{
    navigate("/employee/edit/"+id)
}



const RemoveFunction=(id)=>{
    if(window.confirm("Do you want to remove?")){
       
        fetch("http://localhost:8000/employees/"+id,{method:"DELETE"})
        .then(res=>{
            alert("removed successfuly")
            window.location.reload();
        })
        .catch(err=>{
           console.log(err.message)
        })
    }
}



useEffect(()=>{
    fetch("http://localhost:8000/employees").then((res)=>{
        return res.json();
    }).then((resp)=>{
        console.log(`premiere chargement` )
        console.log(resp)
        setEmpData(resp)
        console.log(`apres premiere chargement de quelque seconde` )
        console.log(empData)
       
    }).catch((err)=>{
        console.Console(err.message)
    })
},[])


    return ( 
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                   <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">add new (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                          {empData
                           &&
                          empData.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <a onClick={()=>editFunction(item.id)} className="btn btn-success">edit</a>
                                        <a onClick={()=>RemoveFunction(item.id)} className="btn btn-danger">remove</a>
                                        <a onClick={()=>detailFunction(item.id)} className="btn btn-primary">details</a>
                                    </td>
                                </tr>
                            )
                        })
                         
                          }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default EmpListing;