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
import InstruktorForm from '../komponente/InstruktorForm';
import moment from 'moment';




function ApplyInstruktor() {

    const dispatch = useDispatch();
    const {user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const onFinish = async(values) =>{
        try{
            dispatch(showLoading());
            const response = await axios.post('/api/user/apply-instruktor-account', {...values, userId : user._id, timings: [moment(values.timigs[0]).format("HH:mm"), moment(values.timigs[1]).format("HH:mm")]  },
                {headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }}
            );
            dispatch(hideLoading());
            if(response.data.success){
                toast.success(response.data.message);
                navigate("/");
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            dispatch(hideLoading());
            toast.error('Something went wrong')
        }
    }


    return (
        <Layout>
            <h1 className='naslov'>PRIJAVA INSTRUKTORA</h1>

            <InstruktorForm onFinish={onFinish}/>

        </Layout>
    )
}

export default ApplyInstruktor