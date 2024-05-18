import React from 'react'

function Registracija(){
    return(
        <div className='autentifikacija'>
            <div className='kartica p-2'>
                <h1 className='kartica-naslov'>Dobro došli</h1>
                <Form>
                    <Form.Item label='Name' name='name'>
                        <Input placeholder='name'/>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Registracija