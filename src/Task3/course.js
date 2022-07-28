import React, { useEffect, useState } from "react";
import './task.css'

function Course(){
    const [course,setCourse] = useState([])
    useEffect(() => {
        console.log("callig")
        fetch("https://61ef7787732d93001778e3c3.mockapi.io/course")
        .then(res=> res.json())
        .then(res=> {
            setCourse(res)
        })
    },[])
   
    return (
        <div>
            <table className="table, th, td">
                <thead>
                    <tr>
                        <th>CourseName</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {course.map((course) => {
                        return (
                            <tr>
                                <td>{course.coursename}</td>
                                <td>{course.id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default Course