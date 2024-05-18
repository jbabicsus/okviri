import React from 'react'
import Layout from '../komponente/Layout'
import Input from 'antd/es/input/Input'
import Form from 'antd/es/form/Form'
import { Button, Col, Row, TimePicker} from 'antd'
import { Await, useRevalidator } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios';
import { showLoading, hideLoading } from '../redux/alertsSlice'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InstruktorForm from '../komponente/InstruktorForm'



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