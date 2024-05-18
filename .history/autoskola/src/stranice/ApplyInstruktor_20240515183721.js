import React from 'react'
import Layout from '../komponente/Layout'
import Input from 'antd/es/input/Input'
import Form from 'antd/es/form/Form'
import { Button, Col, Row, TimePicker} from 'antd'



function ApplyInstruktor() {

    const onFinish = values =>{
        try{
            dispatch(showLoading());
            const response = await axios.post("/api/user/registracija", values);
            dispatch(hideLoading());
            if(response.data.success){
                toast.success(response.data.message);
                toast("Redirectin to login page...");
                navigate("/login");
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            dispatch(hideLoading());
            toast.error('Something went wrong')
        }
    }


    return (
        <Layout>
            <h1 className='naslov'>PRIJAVA INSTRUKTORA</h1>

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

        </Layout>
    )
}

export default ApplyInstruktor