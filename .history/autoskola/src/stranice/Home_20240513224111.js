import React, { useEffect } from "react"

import axios from 'axios'

function Home(){

    const getData=async()=>{
        try{
            const token = localStorage.getItem('token');
            const response = await axios.post('/api/user/get-user-info-by-id',{},
                {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                }
            );
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <div>Home</div>
    )
}

export default Home