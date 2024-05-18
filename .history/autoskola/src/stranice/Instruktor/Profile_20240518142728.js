import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { showLoading, hideLoading } from '../../redux/alertsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../komponente/Layout';
import toast from 'react-hot-toast';
import InstruktorForm from '../../komponente/InstruktorForm';

function Profile() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const params = useParams();
    const [instruktor, setInstruktor] = useState(null);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            dispatch(showLoading());
            const response = await axios.post('/api/instruktor/apply-instruktor-account', { ...values, userId: user._id }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error('Something went wrong');
        }
    };

    const getInstruktorData = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }

            const response = await axios.post("/api/instruktor/get-instruktor-info-by-user-id", {
                userId: params.userId,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.success) {
                setInstruktor(response.data.data);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log('Error fetching instruktor data:', error);
            toast.error('Failed to load instruktor data');
        }
    };

    useEffect(() => {
            getInstruktorData();
    
    },[]);

    return (
        <Layout>
            <h1 className='page-title'>Instruktor Profile</h1>
            <hr />
            {instruktor && <InstruktorForm onFinish={onFinish} initialValues={instruktor}/>}
        </Layout>
    );
}

export default Profile;
