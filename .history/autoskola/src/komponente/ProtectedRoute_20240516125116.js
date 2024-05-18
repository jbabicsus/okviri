import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/userSlice';

function ProtectedRoute({ children }) {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }
            
            const response = await axios.post('/api/user/get-user-info-by-id', { token }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.success) {
                dispatch(setUser(response.data.data));
            } else {
                localStorage.clear();
                navigate("/login");
            }
        } catch (error) {
            localStorage.clear();
            navigate("/login");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!user) {
            getUser();
        } else {
            setLoading(false);
        }
    }, [user]);

    if (loading) {
        return <div>Loading...</div>; // Ili neki indikator učitavanja
    }

    if (localStorage.getItem('token') && user) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute;
