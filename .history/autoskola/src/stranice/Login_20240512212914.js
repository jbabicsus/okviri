import {Button , Form, Input, onFinish} from 'antd';
import React from 'react';


function Login(){

    const onFinish = async(values) =>{
        try{
            const response = await axios.post("/api/user/registracija", values);
            if(response.data.success){
                toast.success(response.data.message);
                toast("Redirectin to login page...");
                navigate("/login");
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
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