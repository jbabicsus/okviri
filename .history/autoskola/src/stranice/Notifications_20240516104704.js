import React from 'react'
import Layout from '../komponente/Layout'
import { Tabs, notification } from 'antd'
import { useSelector } from 'react-redux'

function Notifications() {
    const {user} = useSelector((state) => state.user);
    return (
        <Layout>
            <h1 className='"page-title'>Notificatons</h1>

            <Tabs>
                <Tabs.TabPane tab='Unseen' key={0}>
                    <div className='d-flex justify-content-end'>
                        <h1 className='anchor'>Mark all as seen</h1>
                    </div>
                </Tabs.TabPane>

                {user.unseenNotifications.map((notification)=>{
                    <div className='card p-3'>
                        <div className='card-text'>{notification.message}</div>
                    </div>
                })}


                <Tabs.TabPane tab='Seen' key={1}>
                <div className='d-flex justify-content-end'>
                        <h1 className='anchor'>Delete all</h1>
                    </div>
                </Tabs.TabPane>
            </Tabs>
        </Layout>
    )
}

export default Notifications