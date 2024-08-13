import { useState,useEffect } from "react";
import { useRouter } from "next/router";

const UserInfoPage = ()=>{
    const router = useRouter();
    const [userInfo,setUserInfo]=useState(null);
    console.log(userInfo);
    useEffect(()=>{
        const id=router.query.id;
        async function getUserById(id){
            const data = await fetch(`https://dummyjson.com/users/${id}`);
            setUserInfo(await data.json());
        }
        getUserById(id);
    },[router.query.id])
    return(
        <div>
         {userInfo?.firstName} {userInfo?.lastName} {userInfo?.age}
        </div>
    )
}
export default UserInfoPage;