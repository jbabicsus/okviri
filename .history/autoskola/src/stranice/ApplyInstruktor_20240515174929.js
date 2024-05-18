import React from 'react'
import Layout from '../komponente/Layout'

function ApplyInstruktor() {
    return (
        <Layout>
            <h1>Prijava instruktora</h1>

            <Form>
                <Row>
                    <Col span={8} xs={24} sm={24}>
                        <Form.Item label ="First Name" name='firstName'rules={}>
                            <Input placeholder="First Name" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

        </Layout>
    )
}

export default ApplyInstruktor