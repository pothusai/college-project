import React, { useEffect, useState } from "react";
import './task.css'

function Staff(){
    const [staff,setStaff] = useState([])
    useEffect(() => {
        fetch("https://61ef7787732d93001778e3c3.mockapi.io/Staff")
        .then(res=> res.json())
        .then(res => {
            setStaff(res)
        })
    },[])
    return (
        <div>
            <table className="table, th, td">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Mobile</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {staff.map((staff) => {
                        return (
                            <tr>
                                <td>{staff.name}</td>
                                <td>{staff.dob}</td>
                                <td>{staff.email}</td>
                                <td>{staff.mobile}</td>
                                <td>{staff.id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default Staff