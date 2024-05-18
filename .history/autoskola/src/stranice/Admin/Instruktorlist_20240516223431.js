import React from 'react'
import Layout from '../../komponente/Layout'
import { useDispatch } from 'react-redux';

function Instruktorlist() {

    const [instruktor, setInstruktor] = useState([])
    const dispatch = useDispatch();

    const getUsersData=async()=>{
        try{
            const response = await axios.get('/api/admin/get-all-instruktor' ,{
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            if(response.data.success){
                setInstruktor(response.data.data)
            }
        }catch(error){

            console.log(error);

        }

    }

    useEffect(()=>{
        getInstktordata()
    },[])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (text,record)=>(
                <div className='d-flex'>
                    <h1 className='anchor'>Remove</h1>
                </div>
            )
        },
    ]
    return(
        <Layout>
            <h1 className='page-header'>Instruktor list</h1>
            <Table columns={columns} dataSource={instruktor}/>
        </Layout>
    )
}

export default Instruktorlist