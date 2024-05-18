import React from 'react'
import Form from 'antd/es/form/Form';
import { Row, Col } from 'antd';
import Button from 'antd';
import { TimePicker } from 'antd';

function InstruktorForm(){
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