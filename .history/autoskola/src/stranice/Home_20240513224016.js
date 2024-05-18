import React, { useEffect } from "react"

import axios from 'axios'

import { useSelector } from 'react-redux';

function Home() {
    const { loading } = useSelector(state => state.alerts);

    const getData = async () => {
        try {
            const token = localStorage.getItem('token'); // Dohvaćanje JWT tokena iz lokalne pohrane
            const response = await axios.post('/api/user/get-user-info-by-id', {}, {
                headers: {
                    Authorization: `Bearer ${token}` // Uključivanje JWT tokena u Authorization zaglavlje
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>Home</div>
    );
}

export default Home;