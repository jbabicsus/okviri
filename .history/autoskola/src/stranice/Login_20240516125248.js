import { Button, Form, Input } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/alertsSlice';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            dispatch(showLoading());
            const response = await axios.post("/api/user/login", values);
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message);
                toast("Redirecting to home page...");
                localStorage.setItem("token", response.data.data);
                navigate("/");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Something went wrong');
            }
        }
    };

    return (
        <div className='autentifikacija'>
            <div className='kartica p-4'>
                <h1 className='kartica-naslov'>AUTOŠKOLA STOP</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Molimo unesite email' }]}>
                        <Input placeholder='Email' />
                    </Form.Item>

                    <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Molimo unesite lozinku' }]}>
                        <Input type='password' placeholder='Password' />
                    </Form.Item>

                    <Button className='registracija-btn my-2' htmlType='submit'>LOGIN</Button>

                    <a href='/registracija' className='a mt-4'>CLICK HERE TO REGISTER</a>
                </Form>
            </div>
        </div>
    );
}

export default Login;
