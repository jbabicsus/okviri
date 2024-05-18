import {Button , Form, Input, onFinish} from 'antd';
import {useNavigate} from "react-router-dom";
import React from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import {useDispatch} from "react-redux";
import {hideLoading, showLoading} from "../redux/alertsSlice";

function Registracija(){
    const dispatch= useDispatch();
    const navigate = useNavigate();

    const onFinish = async(values) =>{
        try{
            dispatch(showLoading());
            const response = await axios.post("/api/user/registracija", values);
            dispatch(hideLoading());
            if(response.data.success){
                toast.success(response.data.message);
                navigate("/login");
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            dispatch(hideLoading());
            toast.error('Something went wrong')
        }
    };
    return(
        <div className='autentifikacija'>
            <div className='kartica p-4'>
                <h1 className='kartica-naslov'>AUTOŠKOLA STOP</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Name' name='name'>
                        <Input placeholder='Name'/>
                    </Form.Item>

                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email'/>
                    </Form.Item>

                    <Form.Item label='Password' name='password' type='password'>
                        <Input placeholder='Password'/>
                    </Form.Item>

                    <Button className='registracija-btn my-2' htmlType='submit'>REGISTRACIJA</Button>

                    <a href='/login' className='a mt-4'>CLICK HERE TO LOGIN</a>
                </Form>

            </div>
        </div>
    )
}

export default Registracija