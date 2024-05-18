import React from 'react'
import Layout from '../komponente/Layout'

function Notifications() {
    return (
        <Layout>
            <h1 className='"page-title'>Notificatons</h1>

            <Tabs>
                <Tabs.TabPane tab='Unseen'>
                    <h2>Unseen</h2>
                </Tabs.TabPane>

                <Tabs.TabPane tab='Seen'>
                    <h2>Seen</h2>
                </Tabs.TabPane>
            </Tabs>
        </Layout>
    )
}

export default Notifications