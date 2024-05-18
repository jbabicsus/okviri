import React from 'react'
import { Row, Col, Button, TimePicker, Form, Input } from 'antd';
import moment from 'moment';
import { trusted } from 'mongoose';

function InstruktorForm({ onFinish, initialValues = {} }) {
    const initialTimings = initialValues.timings && initialValues.timings.length === 2
        ? [moment(initialValues.timings[0], 'HH:mm'), moment(initialValues.timings[1], 'HH:mm')]
        : [];

    return (
        <Form layout='vertical' onFinish={(values) => onFinish({
            ...values,
            timings: values.timings ? [moment(values.timings[0]).format("HH:mm"), moment(values.timings[1]).format("HH:mm")] : [],
        })} initialValues={{ ...initialValues, timings: initialTimings }}>
            <Row gutter={20}>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item required label="First Name" name='firstName' rules={[{ required: true }]}>
                        <Input placeholder="First Name" />
                    </Form.Item>
                </Col>

                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item required label="Last Name" name='lastName' rules={[{ required: true }]}>
                        <Input placeholder="Last Name" />
                    </Form.Item>
                </Col>

                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item required label="Email" name='email' rules={[{ required: true }]}>
                        <Input placeholder="Email" />
                    </Form.Item>
                </Col>

                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item required label="Phone number" name='phoneNumber' rules={[{ required: true }]}>
                        <Input placeholder="Phone number" />
                    </Form.Item>
                </Col>

                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item required label="Address" name='address' rules={[{ required: true }]}>
                        <Input placeholder="Address" />
                    </Form.Item>
                </Col>

                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item  label="Timings" name='timings' rules={[{ required: false }]}>
                        <TimePicker.RangePicker format="HH:mm" />
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
