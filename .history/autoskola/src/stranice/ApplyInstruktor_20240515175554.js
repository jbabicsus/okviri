import React from 'react'
import Layout from '../komponente/Layout'
import Input from 'antd/es/input/Input'
import Form from 'antd/es/form/Form'
import { Col, Row} from 'antd'


function ApplyInstruktor() {
    return (
        <Layout>
            <h1>PRIJAVA INSTRUKTORA</h1>

            <Form layout='vertical'>
                <Row>
                    <Col  span={8} xs={24} sm={24}>
                        <Form.Item required label ="First Name" name='firstName'rules={[{required : true}]}>
                            <Input placeholder="First Name" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

        </Layout>
    )
}

export default ApplyInstruktor