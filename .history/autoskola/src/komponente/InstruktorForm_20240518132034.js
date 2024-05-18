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

function InstruktorForm({onFinish}){

    const onFinish = async(values) =>{
        try{
            dispatch(showLoading());
            const response = await axios.post('/api/user/apply-instruktor-account', {...values, userId : user._id },
                {headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }}
            );
            dispatch(hideLoading());
            if(response.data.success){
                toast.success(response.data.message);
                navigate("/"); /*tu triba bit home*/
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            dispatch(hideLoading());
            toast.error('Something went wrong')
        }
    }
    return(
        <Form layout='vertical' onFinish={onFinish}>

        <Row gutter={20}>
            <Col  span={8} xs={24} sm={24} lg={8}>
                <Form.Item required label ="First Name" name='firstName'rules={[{required : true}]}>
                    <Input placeholder="First Name" />
                </Form.Item>
            </Col>

            <Col  span={8} xs={24} sm={24} lg={8}>
                <Form.Item required label ="Last Name" name='lastName'rules={[{required : true}]}>
                    <Input placeholder="Last Name" />
                </Form.Item>
            </Col>

            <Col  span={8} xs={24} sm={24} lg={8}>
                <Form.Item required label ="Email" name='email'rules={[{required : true}]}>
                    <Input placeholder="Email" />
                </Form.Item>
            </Col>

            <Col  span={8} xs={24} sm={24} lg={8}>
                <Form.Item required label ="Phone number" name='phoneNumber'rules={[{required : true}]}>
                    <Input placeholder="Phone number" />
                </Form.Item>
            </Col>

            <Col  span={8} xs={24} sm={24} lg={8}>
                <Form.Item required label ="Address" name='address'rules={[{required : true}]}>
                    <Input placeholder="Address" />
                </Form.Item>
            </Col>

            <Col  span={8} xs={24} sm={24} lg={8}>
                <Form.Item required label ="Timings" name='timings'rules={[{required : true}]}>
                    <TimePicker.RangePicker />
                </Form.Item>
            </Col>

        </Row>

        
            
            

            <div className='i-flex'>
                <Button className='botun' htmlType='submit'>SUBMIT</Button>
            </div>
        
    </Form>
    )
}

export default InstruktorForm;