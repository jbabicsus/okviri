import React, { useState, useEffect } from 'react';
import Layout from '../../komponente/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { showLoading, hideLoading } from '../../redux/alertsSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InstruktorForm from '../../komponente/InstruktorForm';

function Profile() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const [instruktor, setInstruktor] = useState(null);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            dispatch(showLoading());
            const response = await axios.post('/api/user/apply-instruktor-account', { ...values, userId: user._id },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
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
    }

    const getInstruktorData = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }

            const response = await axios.post('/api/instruktor/get-instruktor-info-by-user-id', {
                userId: user._id,  // Koristimo user._id iz Redux-a
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
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
        if (user) {
            getInstruktorData();
        }
    }, [user]);

    return (
        <Layout>
            <h1 className='page-title'>Instruktor Profile</h1>
            <hr />
            <InstruktorForm onFinish={onFinish} />
        </Layout>
    );
}

export default Profile;
