import React, { useEffect, useState } from 'react';
import Layout from '../../komponente/Layout';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Table } from 'antd';
import toast from 'react-hot-toast';

function Instruktorlist() {
    const [instruktor, setInstruktor] = useState([]);
    const dispatch = useDispatch();

    const getInstruktorData = async () => {
        try {
            const response = await axios.get('/api/admin/get-all-instruktor', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.data.success) {
                setInstruktor(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    // Prilagodite ovu funkciju prema vašem redux store-u
const updateUserStatus = (user) => {
    return {
        type: 'UPDATE_USER_STATUS',
        payload: user,
    };
};

// Prilikom odobravanja instruktora
const changedInstruktorStatus = async (record, status) => {
    try {
        const response = await axios.post('/api/admin/change-instruktor-account-status', {
            instruktorId: record._id,
            userId: record.userId,
            status: status
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (response.data.success) {
            toast.success(response.data.message);
            dispatch(updateUserStatus(response.data.user)); // Ažuriranje redux state-a
            getInstruktorData();
        }
    } catch (error) {
        toast.error("Something went wrong");
    }
};

    };

    useEffect(() => {
        getInstruktorData();
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => <h1 className='card-text'>{record.firstName} {record.lastName}</h1>
        },
        {
            title: 'Phone',
            dataIndex: 'phoneNumber',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (text, record) => (
                <div className='d-flex'>
                    {record.status === "pending" && <h1 className='anchor' onClick={() => changedInstruktorStatus(record, 'approved')}>Approve</h1>}
                    {record.status === "approved" && <h1 className='anchor' onClick={() => changedInstruktorStatus(record, 'blocked')}>Block</h1>}
                </div>
            )
        },
    ];

    return (
        <Layout>
            <h1 className='page-header'>Instruktor list</h1>
            <Table columns={columns} dataSource={instruktor} />
        </Layout>
    );


export default Instruktorlist;
