import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

            const response = await axios.post('/api/user/get-user-info-by-id', { userId: user._id }, {
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
        return <div>Loading...</div>;
    }

    if (localStorage.getItem('token') && user) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute;
