import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Users() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleUser(e){
    e.preventDefault()
    const user ={
      name: name,
      email:email
    }
    let copied = [...data];
    copied.push(user)
    setData(copied)
  }
  return (
    <div className="max-w-[800px] mx-auto">
      <div className=" flex flex-col mx-auto border rounded-md w-[400px] p-[10px] mb-[20px] mt-[20px]">
        <h1 className="text-center text-2xl">Add user</h1>
        <form className="flex flex-col gap-[10px] mt-[10px]">
          <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className="border w-100% rounded-md p-[10px]" placeholder="Enter Name" />
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="border w-100% rounded-md p-[10px]" placeholder="Enter Email" />
          <button onClick={handleUser} className="w-full bg-blue-600 p-[10px] text-white rounded-md">Add User</button>
        </form>
      </div>
      <h1 className="text-center text-2xl">User List</h1>
      <div className="flex mx-auto gap-[30px] items-center ml-[80px] p-[10px] flex-wrap">
        {data.length > 0 &&
          data.map(function (el, index) {
            return (
              <div className="border rounded-md p-[10px] w-[300px]" key={index}>
                <h3>Name: {el.name}</h3>
                <h3>UserName: {el.username}</h3>
                <h3>Phone: {el.phone}</h3>
                <h3>Email: {el.email}</h3>
                <h3>Website: {el.website}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Users;
