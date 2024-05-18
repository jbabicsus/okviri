import React from 'react';
import '../layout.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Layout({ children }) {
    const { user } = useSelector((state) => state.user); 
    const location = useLocation();
    const navigate = useNavigate();

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
            path: '#', // Izmenjeno da ne navigira
            onClick: () => {
                localStorage.clear();
                navigate('/login');
            },
        },
    ];

    const adminMenu = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Users',
            path: '/users',
        },
        {
            name: 'Instruktori',
            path: '/instruktori',
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

    const renderMenu = user?.isAdmin ? adminMenu : userMenu;

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
                            <img src='https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-et-d-alerte-jaune.png' className='ikona'></img>
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
