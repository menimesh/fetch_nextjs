import { useState,useEffect } from "react";
import { useRouter } from "next/router";


import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then(res=>res.json())

const UserInfoPage = ()=>{
    const router = useRouter();
    const id=router.query.id;
const {data,error}=useSWR(`https://dummyjson.com/users/${id}`,fetcher);
if (error) return <div>Failed to load user data.</div>;
if (!data) return <div>Loading...</div>;
console.log(data);
return (
    <>
    <div class="container">
  <div >
  <h2 class="text-center">User Information.</h2>
  </div>
</div>
    <table class="table">
  <thead class="thead-green">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.gender}</td>
    </tr>
   
  </tbody>
</table>
       
    </>
);
};
export default UserInfoPage;



   // const [userInfo,setUserInfo]=useState(null);
    // console.log(userInfo);
    // useEffect(()=>{
    //     async function getUserById(id){
    //         const data = await fetch(`https://dummyjson.com/users/${id}`);
    //         setUserInfo(await data.json());
    //     }
    //     getUserById(id);
    // },[router.query.id])
    // return(
    //     <div>
    //      {userInfo?.firstName} {userInfo?.lastName} {userInfo?.age}
    //     </div>
    // )