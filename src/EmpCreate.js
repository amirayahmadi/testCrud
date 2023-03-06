import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const EmpCreate = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [active, setActive] = useState(true);
    const [validation, setValidation] = useState(false);
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({id,name,email,phone,active})
        const empData= {id,name,email,phone,active}
        fetch("http://localhost:8000/employees",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empData)
        }).then((res)=>{
            alert("saved successfuly")
            navigate('/')
        }).catch((err)=>{console.log(err.message)})
    }
    return (  
    <div>
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card" style={{"text-align":"left"}}>
                        <div className="card-title">
                            <h2>employee Create</h2>
                        </div>
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>ID</label>
                                    <input value={id} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input required value={name} onMouseDown={e=>setValidation(true)} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                    {name.length==0 && validation && <span className="text-danger">enter the name</span>}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input  value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                                </div>
                            </div>



                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input  value={phone} onChange={e=>setPhone(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-check">
                                    <input checked={active} onChange={e=>setActive(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                    <label className="form-check-label">Is Active</label>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <button className="btn btn-success" type="submit">Save</button>   
                                    <Link to="/" className="btn btn-danger">Back</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>

            </div>
        </div>
        
    </div>);
}
 
export default EmpCreate;