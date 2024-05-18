import React from 'react'
import Layout from '../../komponente/Layout'
import InstruktorForm from '../../komponente/InstruktorForm';

function Profile(){
    return(
        <div>
            <Layout>
                <h1 className='page-title'>Instruktor profile</h1>
                <hr />
                <InstruktorForm onFinish={onFinish}/>
            </Layout>
        </div>


    )
}

export default Profile;