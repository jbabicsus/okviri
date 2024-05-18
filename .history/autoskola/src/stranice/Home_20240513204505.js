import React, { useEffect } from "react"

import axios from 'axios'

function Home(){

    const getData=async()=>{
        try{
            const response = await axios.post('/api/user/get-user-info-by-id',
                {
                    headers : {

                    }
                }
            )
        }catch{

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