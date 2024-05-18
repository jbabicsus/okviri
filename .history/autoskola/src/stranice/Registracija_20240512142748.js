
import {Button , Form, Input, onFinish} from 'antd';
import React from 'react';

function Registracija(){

    const onFinish = values =>{
        console.log('Podaci iz forme:', values);
    }
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

                    <Form.Item label='Password' name='password'>
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