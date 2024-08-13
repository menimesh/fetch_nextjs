"use client";  // Ensure it's treated as a Client Component

import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import "bootstrap/dist/css/bootstrap.min.css";


const fetcher = (...args) => fetch(...args).then(res => res.json());

const UserData = () => {
    const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
    console.log(data);

    if (error) {
        return <h1>Error****</h1>;
    }
    if (!data) {
        return <h>Data Loading</h>;
    }

    return (
        <div className="container mt-4">
            <h4 className="mb-4">Users</h4>
            
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users && data.users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>
                                <Link href={`/user/${user.id}`}>
                                    {user.firstName}
                                </Link>
                            </td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            
        </div>
    );
}

export default UserData;
