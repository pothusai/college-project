import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css'
import './task.css'
import { Form, Input, Button, Table } from "antd";


function Student() {
    const [form] = Form.useForm()
    const [students, setStudents] = useState([])

    const add = e => {
        // setStudent('')
    }
    useEffect(() => {
        fetch("https://61ef7787732d93001778e3c3.mockapi.io/student")
            .then(res => res.json())
            .then(res => {
                setStudents(res)
            })
    }, [])
    return (
        <div>
            <table className="table, th, td">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>BloodGroup</th>
                        <th>Father Name</th>
                        <th>Mother Name</th>
                        <th>Address</th>
                        <th>Student Photo</th>
                        <th>Course Name</th>
                        <th>Staff Name</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => {
                        return (
                            <tr>
                                <td>{student.name}</td>
                                <td>{student.dob}</td>
                                <td>{student.email}</td>
                                <td>{student.bloodgroup}</td>
                                <td>{student.fathername}</td>
                                <td>{student.mothername}</td>
                                <td>{student.address}</td>
                                <td>{student.studentphoto}</td>
                                <td>{student.coursename}</td>
                                <td>{student.staffname}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {/* {students.map((item) => {
                return(
                    <div> {item.name} </div>
                )
            })} */}
            {/* <Form form={form} name="horizontal_login" layout="inline">
                <Form.Item label="Name">
                    <Input placeholder="name of a person" />
                </Form.Item>
                <Form.Item label="Email">
                    <Input placeholder="mail of a person" />
                </Form.Item>
                <Form.Item label="DOB">
                    <Input placeholder="DOB of a person" />
                </Form.Item>
                <Form.Item label="Blood Group">
                    <Input placeholder="Bloodgroup of a person" />
                </Form.Item>
                <Form.Item label="Father Name">
                    <Input placeholder="Fathername of a person" />
                </Form.Item>
                <Form.Item label="Mother Name">
                    <Input placeholder="mothername of a person" />
                </Form.Item>
                <Form.Item label="Address">
                    <Input placeholder="address of a person" />
                </Form.Item>
                <Form.Item label="Student Photo">
                    <Input placeholder="Studentphoto of a person" />
                </Form.Item>
                <Form.Item label="Course Name">
                    <Input placeholder="Coursename of a person" />
                </Form.Item>
                <Form.Item label="Staff Name">
                    <Input placeholder="Staffname of a person" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={() => add()}>Add</Button>
                </Form.Item> */}
            {/* </Form> */}

        </div>
    )
}

export default Student