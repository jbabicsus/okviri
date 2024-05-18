import React from 'react';
import Layout from '../komponente/Layout';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showLoading, hideLoading } from '../redux/alertsSlice';
import axios from 'axios';
import toast from 'react-hot-toast';

function Notifications() {
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const markAllAsSeen=async()=>{

        try{
            dispatch(showLoading());
            const response = await axios.post("/api/user/mark-all-notifications-as-seen", {userId: user._id});
            dispatch(hideLoading());
            if(response.data.success){
                toast.success(response.data.message);

            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            dispatch(hideLoading());
            toast.error('Something went wrong')
        }

    }

    // Provera da li user postoji i ima unseenNotifications
    if (!user) {
        return <div>Loading...</div>; // Ili neka druga oznaka učitavanja
    }

    return (
        <Layout>
            <h1 className='page-title'>Notifications</h1>
            <Tabs defaultActiveKey="0">
                <Tabs.TabPane tab='Unseen' key="0">
                    <div className='d-flex justify-content-end'>
                        <h1 className='anchor' onClick={()=>markAllAsSeen()}>Mark all as seen</h1>
                    </div>
                    {user.unseenNotifications.length > 0 ? (
                        user.unseenNotifications.map((notification, index) => (
                            <div className='card p-2' key={index} onClick={()=>navigate(notification.onClickPath)}>
                                <div className='card-text'>{notification.message}</div>
                            </div>
                        ))
                    ) : (
                        <div>No unseen notifications</div>
                    )}
                </Tabs.TabPane>
                <Tabs.TabPane tab='Seen' key="1">
                    <div className='d-flex justify-content-end'>
                        <h1 className='anchor'>Delete all</h1>
                    </div>
                    {user.seenNotifications.length > 0 ? (
                        user.seenNotifications.map((notification, index) => (
                            <div className='card p-3' key={index}>
                                <div className='card-text'>{notification.message}</div>
                            </div>
                        ))
                    ) : (
                        <div>No seen notifications</div>
                    )}
                </Tabs.TabPane>
            </Tabs>
        </Layout>
    );
}

export default Notifications;
