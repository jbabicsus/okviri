import React from 'react'
import Layout from '../komponente/Layout'
import { Tabs } from 'antd'

function Notifications() {
    return (
        <Layout>
            <h1 className='"page-title'>Notificatons</h1>

            <Tabs>
                <Tabs.TabPane tab='Unseen' key={0}>
                    <div className='d-flex justify-content-end'>
                        <h1 className='anchor'>Mark all as seen</h1>
                    </div>
                </Tabs.TabPane>

                <Tabs.TabPane tab='Seen' key={1}>
                    <h2>Seen</h2>
                </Tabs.TabPane>
            </Tabs>
        </Layout>
    )
}

export default Notifications