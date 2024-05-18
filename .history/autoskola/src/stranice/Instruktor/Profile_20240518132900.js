import React from 'react'
import Layout from '../../komponente/Layout'
import Input from 'antd/es/input/Input'
import Form from 'antd/es/form/Form'
import { Button, Col, Row, TimePicker} from 'antd'
import { Await, useRevalidator } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios';
import { showLoading, hideLoading } from '../../redux/alertsSlice'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InstruktorForm from '../../komponente/InstruktorForm'




function Profile(){

    const dispatch = useDispatch();
    const {user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const onFinish = async(values) =>{
        try{
            dispatch(showLoading());
            const response = await axios.post('/api/user/apply-instruktor-account', {...values, userId : user._id },
                {headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }}
            );
            dispatch(hideLoading());
            if(response.data.success){
                toast.success(response.data.message);
                navigate("/"); /*tu triba bit home*/
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            dispatch(hideLoading());
            toast.error('Something went wrong')
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
                userId: user._id,
            },{ token: localStorage.getItem("token") }, {
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
        getInstruktorData();
        
    }, []);
    return(
        <div>
            <Layout>
                <h1 className='page-title'>Instruktor profile</h1>
                <hr />
                <InstruktorForm onFinish={onFinish}/>
            </Layout>
        </div>


    )
}

export default Profile;