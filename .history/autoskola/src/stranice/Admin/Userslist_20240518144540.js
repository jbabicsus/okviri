import React, { useEffect, useState } from 'react'
import Layout from '../../komponente/Layout'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Table } from 'antd'

function Userslist() {
    const [users,setUsers] = useState([])
    const dispatch = useDispatch();

    const getUsersData=async()=>{
        try{
            const response = await axios.get('/api/admin/get-all-users' ,{
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            if(response.data.success){
                setUsers(response.data.data)
            }
        }catch(error){

            console.log(error);

        }

    }

    useEffect(()=>{
        getUsersData()
    },[])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (text,record)=>(
                <div className='d-flex'>
                    <h1 className='anchor'>Remove</h1>
                </div>
            )
        },
    ];
    return(
        <Layout>
            <h1 className='page-header'>Users list</h1>
            <Table columns={columns} dataSource={users}/>
        </Layout>
    )
}

export default Userslist