
import {Button , Form, Input, Link} from 'antd';
import React from 'react';

function Registracija(){
    return(
        <div className='autentifikacija'>
            <div className='kartica p-4'>
                <h1 className='kartica-naslov'>AUTOŠKOLA STOP</h1>
                <Form layout='vertical'>
                    <Form.Item label='Name' name='name'>
                        <Input placeholder='Name'/>
                    </Form.Item>

                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email'/>
                    </Form.Item>

                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Password'/>
                    </Form.Item>

                    <Button className='registracija-btn my-2'>REGISTRACIJA</Button>

                    <a href='/login' className='a mt-4'>CLICK HERE TO LOGIN</a>
                </Form>

            </div>
        </div>
    )
}

export default Registracija