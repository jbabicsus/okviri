import {Button , Form, Input, onFinish} from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';


function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async(values) =>{
        try{
            dispatch(showLoading())
            const response = await axios.post("/api/user/login", values);
            dispatch(hideLoading())
            if(response.data.success){
                toast.success(response.data.message);
                toast("Redirectin to home page...");
                localStorage.setItem("token", response.data.data
                    
                );
                navigate("/");
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            dispatch(hideLoading());
            toast.error('Something went wrong')
        }
    }
    return(
        <div className='autentifikacija'>
            <div className='kartica p-4'>
                <h1 className='kartica-naslov'>AUTOŠKOLA STOP</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Molimo unesite email' }]}>
                        <Input placeholder='Email'/>
                    </Form.Item>

                    <Form.Item label='Password' name='password' type='password' rules={[{ required: true, message: 'Molimo unesite lozinku' }]}>
                        <Input placeholder='Password'/>
                    </Form.Item>

                    <Button className='registracija-btn my-2' htmlType='submit'>LOGIN</Button>

                    <a href='/registracija' className='a mt-4'>CLICK HERE TO REGISTER</a>
                </Form>

            </div>
        </div>
    )
}

export default Login