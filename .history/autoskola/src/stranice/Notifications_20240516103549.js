import React from 'react'
import Layout from '../komponente/Layout'
import { Tabs } from 'antd'

function Notifications() {
    return (
        <Layout>
            <h1 className='"page-title'>Notificatons</h1>

            <Tabs>
                <Tabs.TabPane tab='Unseen' key={0}>
                    <h2>Unseen</h2>
                </Tabs.TabPane>

                <Tabs.TabPane tab='Seen' key={1}>
                    <h2>Seen</h2>
                </Tabs.TabPane>
            </Tabs>
        </Layout>
    )
}

export default Notifications