import React, { useEffect, useState } from 'react'
import Layout from '../../komponente/Layout'
import { useDispatch } from 'react-redux'
import axios from 'axios'

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
    return(
        <Layout>
            <h1 className='page-header'>Users list</h1>
        </Layout>
    )
}

export default Userslist