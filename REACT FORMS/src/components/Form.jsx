import { useState } from "react";
import './form.css'

function Form(){
    const [form, setForm]= useState({
    username:"",
    age:18,
    address:"",
    department:"",
    salary:0,
    marital_status:""
    })
    
    const handleChange=(e)=>{
        const {id, value}= e.target;
        setForm({...form, 
            [id]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); 
        fetch("http://localhost:8080/profile",{
            method:"POST",
            body:JSON.stringify(form),
            headers:
            {"Content-type":"application/json"}
        });
        console.log(form);
    }
    return (
        <form onSubmit={handleSubmit} className="addstudent">
      <div>
        Name:{" "}
        <input
          type="text"
          id="username"
          placeholder="Enter Name"
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        age:
        <input
          type="text"
          id="age"
          placeholder="Enter last name"
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Address:
        <input
          type="text"
          id="address"
          placeholder="Enter Address"
          onChange={handleChange}
        />
      </div>
      <div>
      Department:
        <select
          value={""} // select dropdown needs both value and onChange attributes
          id="department"
          onChange={handleChange}
        >
          <option value="law">LIGHT</option>
          <option value="commerce">CFL</option>
          <option value="science">BULB</option>
          <option value="sports">LED</option>
        </select>
      </div>
      <div>
        Salary{" "}
        <input
          type="number"
          id="salary"
          placeholder="Enter Salary"
          onChange={handleChange}
        />
      </div>
      <div>
        Marital Status: 
        <div>
          Married
          <input
            id="marital_status"
            type="checkbox"
            value={"married"}
            onChange={handleChange}
          />{" "}
          Single{" "}
          <input
            id="marital_status"
            type="checkbox"
            value={"single"}
            onChange={handleChange}
          />
        </div>
      </div>
      <input className="submit" type="submit" value="Submit" />
    </form>
    )
}
export default Form