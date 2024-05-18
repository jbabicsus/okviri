import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/userSlice';

function ProtectedRoute(props) {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUser = async () => {

        try {
            const response = await axios.post("/api/user/get-user-info-by-id", { token: localStorage.getItem("token") }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (response.data.success) {
                dispatch(setUser(response.data.data));
            }
            else {
                navigate("/login");
            }

        } catch (error) {
            navigate("/login");
        }


    };

    useEffect(() => {
        if (!user) {
            getUser();
        }

    }, [user])
    if (localStorage.getItem('token')) {
        return props.children
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute