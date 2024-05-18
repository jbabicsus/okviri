import React, { useEffect } from 'react';
import '../layout.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Badge} from 'antd';

function Layout({ children }) {
    const { user } = useSelector((state) => state.user); 
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("User state in Layout component:", user);
    }, [user]);

    const userMenu = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Termini',
            path: '/termini',
        },
        {
            name: 'Prijava instruktora',
            path: '/prijava-instruktor', 
        },
        {
            name: 'Profile',
            path: '/profile',
        },
        {
            name: 'Logout',
            path: '#', 
            onClick: () => {
                localStorage.clear();
                navigate('/login');
            },
        },
    ];

    const instruktorMenu = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Termini',
            path: '/termini',
        },
        {
            name: 'Profile',
            path: `/instruktor/profile/${user?._id}`,
        },
    ];

    const adminMenu = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Users',
            path: '/admin/userslist',
        },
        {
            name: 'Instruktor',
            path: '/admin/instruktorlist',
        },
        {
            name: 'Profile',
            path: '/profile',
        },
        {
            name: 'Logout',
            path: '#', // Izmenjeno da ne navigira
            onClick: () => {
                localStorage.clear();
                navigate('/login');
            },
        },
    ];

    const renderMenu = user?.isAdmin ? adminMenu : user?.isInstruktor ? instruktorMenu : userMenu;

    return (
        <div className='main'>
            <div className='flex'>
                <div className='sidebar'>
                    <div className='sidebar-header'>
                        <h1>AUTOSKOLA</h1>
                    </div>

                    <div className='menu'>
                        {renderMenu.map((menu) => (
                            <div key={menu.name} className={`flex ${location.pathname === menu.path ? 'active-menu' : ''}`}>
                                <Link
                                    to={menu.path}
                                    className='linkovi'
                                    onClick={menu.onClick ? menu.onClick : null}
                                >
                                    {menu.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='content'>
                    <div className='header'>
                        <div className='flex'>
                            <Badge count={user?.unseenNotifications.length} onClick={()=>navigate('/notifications')}>
                            <img src='https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-et-d-alerte-jaune.png' className='ikona'></img>
                            </Badge>
                            
                            {user && <Link className='link2' to='/profile'>{user.name}</Link>}
                        </div>
                    </div>

                    <div className='body'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
