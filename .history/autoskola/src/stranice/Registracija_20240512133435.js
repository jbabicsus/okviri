
import {Form,Input} from 'antd'
import React from 'react'

function Registracija(){
    return(
        <div className='autentifikacija'>
            <div className='kartica p-2'>
                <h1 className='kartica-naslov'>Dobro došli</h1>
                <Form layout>
                    <Form.Item label='Name' name='name'>
                        <Input placeholder='Name'/>
                    </Form.Item>

                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email'/>
                    </Form.Item>

                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Password'/>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Registracija