function Dashboard(){

const user =
JSON.parse(localStorage.getItem("user"));

return(

<div>

<h1>
Welcome {user.name}
</h1>

<h2>
Role : {user.role}
</h2>

</div>

);

}

export default Dashboard;