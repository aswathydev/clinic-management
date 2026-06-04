// import {useState} from "react";
// import API from "./api"

// function Register(){

// const [form,setForm] = useState({
// name:"",
// email:"",
// password:"",
// role:"patient"
// });

// const handleSubmit = async(e)=>{

// e.preventDefault();

// await API.post("/auth/register",form);

// alert("Registration Success");

// };

// return(

// <form onSubmit={handleSubmit}>

// <input
// placeholder="Name"
// onChange={(e)=>
// setForm({...form,name:e.target.value})}
// />

// <input
// placeholder="Email"
// onChange={(e)=>
// setForm({...form,email:e.target.value})}
// />

// <input
// type="password"
// placeholder="Password"
// onChange={(e)=>
// setForm({...form,password:e.target.value})}
// />

// <select
// onChange={(e)=>
// setForm({...form,role:e.target.value})}
// >

// <option value="patient">Patient</option>
// <option value="doctor">Doctor</option>

// </select>

// <button>
// Register
// </button>

// </form>

// );

// }

// export default Register;



import { useState } from "react";
import API from "./api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);
      alert("Registration Success");
    } catch (error) {
      alert("Registration Failed");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;