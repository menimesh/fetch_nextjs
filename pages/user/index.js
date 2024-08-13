"use client";  // Ensure it's treated as a Client Component

// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// const Index = () => {
//   const router = useRouter();
//   const [value, setValue] = useState('');

//   return (
//     <>
//       <div>This is the index file</div>
      
//       <input 
//         type='text' 
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Enter a value"
//       />
      
//       <button onClick={() => {
//         if (value.trim() !== "") {
//           router.push({
//             pathname: '/user/[test]/inform',
//             query: { test: value }
//           });
//         } else {
//           router.replace("/");
//         }
//       }}>
//         Click
//       </button>
      
//       <button onClick={() => router.replace("/")}>
//         Home
//       </button>
//     </>
//   );
// }

// export default Index;
import { useEffect,useState } from "react";
import Link from "next/link";
const UserData= ()=>{
  const [users,setUsers] = useState([])
  console.log(users);
  useEffect(()=>{
    async function fetchData (){
      const data = await fetch("https://dummyjson.com/users");
      setUsers(await data.json());
    }
    fetchData()
  }, []);
  return(
    <div>
    <h4>Users</h4>
    {
      users &&
      users.users &&
      users.users.map((user)=><Link href={`/user/${user.id}`} key={user.id}>
        <div>

        {user.firstName}
        </div>
        
        </Link>)
    }
    </div>
  )
}
export default UserData