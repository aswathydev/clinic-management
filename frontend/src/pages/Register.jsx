import {useState} from "react";
import API from "./api"

function Register(){

const [form,setForm] = useState({
name:"",
email:"",
password:"",
role:"patient"
});

const handleSubmit = async(e)=>{

e.preventDefault();

await API.post("/auth/register",form);

alert("Registration Success");

};

return(

<form onSubmit={handleSubmit}>

<input
placeholder="Name"
onChange={(e)=>
setForm({...form,name:e.target.value})}
/>

<input
placeholder="Email"
onChange={(e)=>
setForm({...form,email:e.target.value})}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>
setForm({...form,password:e.target.value})}
/>

<select
onChange={(e)=>
setForm({...form,role:e.target.value})}
>

<option value="patient">Patient</option>
<option value="doctor">Doctor</option>

</select>

<button>
Register
</button>

</form>

);

}

export default Register;