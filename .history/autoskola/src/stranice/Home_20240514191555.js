import React, { useEffect } from "react"

import axios from 'axios'
import Layout from "../komponente/Layout";

function Home() {

    const getData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('/api/user/get-user-info-by-id', {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
    <Layout>
        <h1>Homepage</h1>
    </Layout>)
    ;
}

export default Home;